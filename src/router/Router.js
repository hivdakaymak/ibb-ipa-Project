import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Index from "../pages/Home";
import EventPlaces from "../pages/EventPlace";
import EventDate from "../pages/EventDate";
import SocialPolicy from "../pages/SocialPolicy";
import PolicyForm from "../pages/PolicyForm";
import Events from "../pages/Events";
import PolicyUserList from "../pages/PolicyUserList";
import Verification from "../pages/Verification";
import { Provider } from 'react-redux'
import store from '../store/'
import LoginPage from "../pages/LoginPage";

const Routers = () => {
  return (
    <Router>
      <Provider store={store}>
        <Routes>
          <Route  path="/events-var" element={<Index />} />
          <Route path="/event-place" element={<EventPlaces />} />
          <Route path="/event-date" element={<EventDate />} />
          <Route path="/social-policy" element={<SocialPolicy />} />
          <Route path="/policy-form" element={<PolicyForm />} />
          <Route path="/events" element={<Events />} />
          <Route path="/policy-user-list" element={<PolicyUserList />} />
          <Route path="/verification" element={<Verification />} />
          <Route index element={<LoginPage />} />
        </Routes>
      </Provider>
    </Router>
  );
};

store.subscribe(Routers);

export default Routers;
