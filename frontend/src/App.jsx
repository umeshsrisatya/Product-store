import { Box, useColorModeValue, Text, VStack } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";

function App() {
    return (
        <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/create" element={<CreatePage />} />
            </Routes>

            {/* Copyright Section at the Bottom */}
            <VStack mt={8} spacing={4} align="center">
                <Text fontSize="lg" fontWeight="bold" bgGradient="linear(to-r, teal.400, cyan.500, blue.400)" bgClip="text" fontFamily="'Raleway', sans-serif">
                    &copy; {new Date().getFullYear()} Umesh. All rights reserved.
                </Text>
            </VStack>
        </Box>
    );
}

export default App;
