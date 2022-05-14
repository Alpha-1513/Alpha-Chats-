import React from "react";
import Router from "./Router";
import { AuthProvider } from "../context/AuthContext";
import { UserProvider } from "../context/UserContext";
import { PageProvider } from "../context/PageContext";
import { ChannelProvider } from "../context/ChannelContext";
import { ModalProvider } from "../context/ModalContext"

const App = () => {

  return (
    <ModalProvider>
      <AuthProvider>
        <UserProvider>
          <PageProvider>
            <ChannelProvider>
              <Router />
            </ChannelProvider>
          </PageProvider>
        </UserProvider>
      </AuthProvider>
    </ModalProvider>
  );
};

export default App;
