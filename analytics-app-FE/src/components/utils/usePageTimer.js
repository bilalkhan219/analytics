import { useEffect, useState } from "react";
import { trackAnalytics } from "./analyticsTracker.js";
import { useAuth } from "../auth/AuthContext.js";

const usePageTimer = (pageName) => {
  const [startTime, setStartTime] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const { auth } = useAuth();


  const visitorId = auth.id;

  useEffect(() => {
    const timer = Date.now();
    setStartTime(timer);

    return () => {
      const endTime = Date.now();
      const timeSpent = (endTime - timer) / 1000;
      setElapsedTime(timeSpent);
      trackAnalytics(visitorId, pageName, timeSpent);
    };
  }, []);

  return null;
};

export default usePageTimer;
