import React from "react";
import { Outlet, LayoutComponent } from "rasengan";

const AppLayout: LayoutComponent = () => {
	return (
		<React.Fragment>
			{/* Navbar */}

			
			<Outlet />

			{/* Footer */}
		</React.Fragment>
	);
};

AppLayout.path = "/";

export default AppLayout;
