import React from "react";
import { Routes, Route } from "react-router-dom";
import { 
	Dog,
	Home,
	Http,
	Login,
	Register,
	Users,
} from "../pages";

export const RouterStack: React.FC = () => (
	<Routes>
		<Route index path="/" element={<Login />} />
		<Route path="/register" element={<Register />} />
		<Route path="/home" element={<Home />} />
		<Route path="/http" element={<Http/>} />
		<Route path="/dog" element={<Dog />} />
		<Route path="users">
			<Route index path="/users" element={<Users.TableView />} />
			<Route path="/users/details/:_id" element={<Users.Details />} />
			<Route path="/users/edit/:_id" element={<Users.Edit />} />
		</Route>
	</Routes>
);