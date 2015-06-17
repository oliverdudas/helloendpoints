package com.example.helloendpoints;

/**
 * Contains the client IDs and scopes for allowed clients consuming the helloworld API.
 */
public class Constants {
  public static final String WEB_CLIENT_ID = "155971558786-8onak2kteln59cn5p49t9ji6t5np6c7i.apps.googleusercontent.com";
  public static final String ANDROID_CLIENT_ID = "replace this with your Android client ID";
  public static final String IOS_CLIENT_ID = "replace this with your iOS client ID";
  public static final String ANDROID_AUDIENCE = WEB_CLIENT_ID;

  public static final String EMAIL_SCOPE = "https://www.googleapis.com/auth/userinfo.email";

  public static final String API_EXPLORER_CLIENT_ID = com.google.api.server.spi.Constant.API_EXPLORER_CLIENT_ID;
}
