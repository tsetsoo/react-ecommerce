import { takeLatest, call } from "redux-saga/effects";

import UserActionTypes from "./user.types";
import {
  onEmailSignInStart,
  onGoogleSignInStart,
  googleSignIn,
  emailSignIn,
  getSnapshotFromUserAuth,
  onCheckUserSession,
  isUserAuthenticated,
  onSignOutStart,
  signOut,
  onSignUpSuccess,
  signInAfterSignUp,
  onSignUpStart,
  signUp,
} from "./user.sagas";
import { createUserProfileDocument } from "../../firebase/firebase.utils";

it("get snapshot from userAuth", () => {
  const mockUserAuth = {};
  const mockAdditionalData = {};
  const gen = getSnapshotFromUserAuth(mockUserAuth, mockAdditionalData);

  expect(gen.next().value).toEqual(
    call(createUserProfileDocument, mockUserAuth, mockAdditionalData)
  );
});

it("testing onGoogleSignInStart", () => {
  const gen = onGoogleSignInStart();
  expect(gen.next().value).toEqual(
    takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, googleSignIn)
  );
});

it("testing onEmailSignInStart", () => {
  const gen = onEmailSignInStart();
  expect(gen.next().value).toEqual(
    takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, emailSignIn)
  );
});

it("testing checking user session", () => {
  const gen = onCheckUserSession();
  expect(gen.next().value).toEqual(
    takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
  );
});

it("testing onSignOutStart", () => {
  const gen = onSignOutStart();
  expect(gen.next().value).toEqual(
    takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
  );
});

it("testing onSignUpSuccess", () => {
  const gen = onSignUpSuccess();
  expect(gen.next().value).toEqual(
    takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp)
  );
});

it("testing onSignUpSuccess", () => {
  const fakePayload = { payload: { user: {}, additionalData: {} } };
  const gen = signInAfterSignUp(fakePayload);
  expect(gen.next().value).toEqual(
    getSnapshotFromUserAuth(
      fakePayload.payload.user,
      fakePayload.payload.additionalData
    )
  );
});

it("testing onSignUpStart", () => {
  const gen = onSignUpStart();
  expect(gen.next().value).toEqual(
    takeLatest(UserActionTypes.SIGN_UP_START, signUp)
  );
});
