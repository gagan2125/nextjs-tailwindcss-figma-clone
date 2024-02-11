import { ClientSideSuspense } from "@liveblocks/react";
import { ClientRequest } from "http";
import React from "react";
import { CommentsOverlay } from "./Commentsoverlay";

export const Comments = () => {
  return (
    <ClientSideSuspense fallback={null}>
      {() => <CommentsOverlay />}
    </ClientSideSuspense>
  );
};
