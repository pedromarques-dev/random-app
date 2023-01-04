import { Box, Button, Input } from "@chakra-ui/react"
import React from "react"

interface IProps {
    placeholder: string;
    onChange: (e: any) => void;
    value: string;
}

export const SearchInput: React.FC<IProps> = (props) => {
    const { 
        placeholder,
        value,
        onChange,
    } = props;
    return (
        <Box textAlign="center">
            <Input 
                type='search' 
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                bgColor="#fff"
                w="40%"
                my={2}
                mx="auto"
            />
        </Box>
    )
}