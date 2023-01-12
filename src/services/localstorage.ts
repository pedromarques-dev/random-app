import React from "react";

export default class AuthUser {
	private localstorage_key = React.useMemo(() => "user_key", []);

	public saveOnLocalStorage = (username: string) => {
		localStorage.setItem(this.localstorage_key, JSON.stringify(username));
	};

	public removeFromLocalStorage = () => {
		localStorage.removeItem(this.localstorage_key);
	};
}
