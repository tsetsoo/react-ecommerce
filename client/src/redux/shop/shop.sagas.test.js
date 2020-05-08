import { takeLatest, call, put } from "redux-saga/effects";

import ShopActionTypes from "./shop.types";
import { fetchCollectionsAsync, fetchCollectionsStart } from "./shop.sagas";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "./shop.actions";

it("testing fetchCollectionsStart", () => {
  const gen = fetchCollectionsStart();
  expect(gen.next().value).toEqual(
    takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync)
  );
});

describe("testing fetchCollectionsAsync", () => {
  const gen = fetchCollectionsAsync();
  it("should call firestore collection ", () => {
    const getCollection = jest.spyOn(firestore, "collection");
    gen.next();
    expect(getCollection).toHaveBeenCalled();
  });

  it("should call convertCollectionsSnapshotToMap", () => {
    const mockSnapshot = {};
    expect(gen.next(mockSnapshot).value).toEqual(
      call(convertCollectionsSnapshotToMap, mockSnapshot)
    );
  });

  it("should call fetchCollectionsSuccess", () => {
    const mockCollectionMap = {};
    expect(gen.next(mockCollectionMap).value).toEqual(
      put(fetchCollectionsSuccess(mockCollectionMap))
    );
  });

  it("should call fetchCollectionsFailure if error", () => {
    const newGen = fetchCollectionsAsync();
    newGen.next();
    const mockError = { message: "failed" };
    expect(newGen.throw(mockError).value).toEqual(
      put(fetchCollectionsFailure("failed"))
    );
  });
});
