import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { RouterStack } from "./routes";
import { ContainerGeral } from "./components";

const App: React.FC = () => {
	return (
		<React.StrictMode>
			<ChakraProvider>
				<ContainerGeral>
					<RouterStack />
				</ContainerGeral>
			</ChakraProvider>
		</React.StrictMode>
	);
};

export default App;
