import { action, LoadableFactory, makeLoadableContainer } from ".";

describe("LoadableContainer", () => {
  type User = { id: string; name: string };

  // multi user action
  const getUserListAsync = {
    request: action("GET_USER_LIST/REQUEST")<{}>(),
    success: action("GET_USER_LIST/SUCCESS")<{ [id: string]: User }>(),
    failure: action("GET_USER_LIST/FAILURE")<{
      request: {};
      message: string;
    }>()
  };

  // single user action
  const getUserAsync = {
    request: action("GET_USER/REQUEST")<{ id: string }>(),
    success: action("GET_USER/SUCCESS")<{ [id: string]: User }>(),
    failure: action("GET_USER/FAILURE")<{
      request: { id: string };
      message: string;
    }>()
  };

  let container = makeLoadableContainer<User>();
  it("Creates empty containers correctly", () => {
    expect(container).toMatchSnapshot();
  });

  const user1 = { id: "5", name: "Joe" };
  const user2 = { id: "6", name: "Jane" };
  let multiRequest = getUserListAsync.request({}, { requestId: 42 });
  let singleRequest = getUserAsync.request({ id: "5" }, { requestId: 43 });

  let multiFailure = getUserListAsync.failure(
    { message: "Something went wrong", request: multiRequest.payload },
    { requestId: multiRequest.meta.requestId }
  );
  let singleFailure = getUserAsync.failure(
    { message: "Something else went wrong", request: singleRequest.payload },
    { requestId: singleRequest.meta.requestId }
  );

  let multiSuccess = getUserListAsync.success(
    { "5": user1, 6: user2 },
    { requestId: multiRequest.meta.requestId }
  );
  let singleSuccess = getUserAsync.success(
    { "5": user1 },
    { requestId: singleRequest.meta.requestId }
  );

  it("updates in response to listrequests", () => {
    container = container.request(multiRequest);
    expect(container.items).toEqual({});
    expect(container.pendingRequests).toEqual([42]);
  });

  it("updates in response to singleton requests", () => {
    container = container.requestOne(singleRequest);
    expect(container.pendingRequests).toEqual([42, 43]);
    expect(container.items).toEqual({ "5": { state: "PENDING" } });
  });
  it("responds to request failures", () => {
    container = container.fail(multiFailure);
    expect(container.pendingRequests).toEqual([43]);
    expect(container.errors).toEqual({ 42: "Something went wrong" });

    container = container.fail(singleFailure);
    expect(container.pendingRequests).toEqual([]);
    expect(container.items).toEqual({
      "5": { state: "FAILED", message: "Something else went wrong" }
    });
    expect(container.errors).toEqual({
      42: "Something went wrong",
      43: "Something else went wrong"
    });
  });

  it("clears named errors", () => {
    container = container.clearError(42);
    expect(container.errors).toEqual({ 43: "Something else went wrong" });
    container = container.clearError(43);
    container = container.clearError(43);
  });

  it("clears all errors", () => {
    container = container.clearErrors();
    expect(container.errors).toEqual({});
  });

  // reset for the successful test
  it("handles successes", () => {
    container = container.requestOne(singleRequest).request(multiRequest);
    container = container.receive(singleSuccess);
    expect(container.pendingRequests).toEqual([42]);
    expect(container.items).toEqual({ "5": { state: "LOADED", item: user1 } });

    container = container.receive(multiSuccess);
    expect(container.pendingRequests).toEqual([]);
    expect(container.items).toEqual({
      "5": { state: "LOADED", item: user1 },
      "6": { state: "LOADED", item: user2 }
    });
  });

  // container = container.fail({
  //   payload: { request: request2.payload, message: "Something went wrong" },
  //   meta: request.meta
  // });
  // container = container.clearError(request.meta.requestId);
});
