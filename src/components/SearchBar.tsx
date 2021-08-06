import React from "react";
import {useState} from 'react';
import {TextInput} from 'react-native';

const SearchBar = ({placeholder, onSearch}) =>{

    const [query,setQuery] = useState("");

    return (
        <TextInput style = {{fontSize: 16}}
            value = {query}
            placeholder = {placeholder}
            placeholderTextColor = 'grey'
            autoCapitalize = 'none'
            keyboardType = 'web-search'
            autoCorrect = {false}
            textColor = 'black'
            onChangeText = {value => {setQuery(value); onSearch(query);}}/>
    );
}

export default SearchBar;