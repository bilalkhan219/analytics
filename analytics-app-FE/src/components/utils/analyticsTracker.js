import axios from 'axios';
import { toast } from 'react-toastify';

export const trackAnalytics = async (visitorId, pageName, timeSpent) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}analytics`, {
      pageName: pageName,
      timeSpent: timeSpent,
      visitorId: visitorId
    });
  } catch (error) {
    toast.error('Error saving analytics record');
  }
}