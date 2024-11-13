import { ChakraProvider } from '@chakra-ui/react';
import { Router } from '..'; 

function App() {
    return (
        <ChakraProvider>
            <Router />
        </ChakraProvider>
    );
}

export default App;
