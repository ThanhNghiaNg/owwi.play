"use client";
import React from "react";
import Video from "next-video";
// import getStarted from "@/videos/sample.mp4";

export const HomeClient = () => {
  return (
    <div className="relative flex gap-2 items-center align-middle mt-60">
      <Video src="/videos/sample.mp4" placeholder="/videos/thumbnail.png" />;
      <video
        width="320"
        height="240"
        controls
        preload="none"
        poster="/videos/thumbnail.png"
      >
        <source src="/videos/sample.mp4" type="video/mp4" />
        <track
          src="/path/to/captions.vtt"
          kind="subtitles"
          srcLang="en"
          label="English"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
