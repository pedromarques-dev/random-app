import React from "react";
import { Routes, Route } from "react-router-dom";
import { 
	Dog,
	Home,
	Http,
	Login,
	Users,
} from "../pages";

export const RouterStack: React.FC = () => (
	<Routes>
		<Route index path="/" element={<Login />} />
		<Route path="/home" element={<Home />} />
		<Route path="/http" element={<Http/>} />
		<Route path="/dog" element={<Dog />} />
		<Route path="/users" element={<Users />} />
	</Routes>
);