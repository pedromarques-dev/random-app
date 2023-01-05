import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { RouterStack } from "./routes";
import { ContainerGeral } from "./components";

const App: React.FC = () => {
	return (
		<ChakraProvider>
			<ContainerGeral>
				<RouterStack />
			</ContainerGeral>
		</ChakraProvider>
	);
};

export default App;
