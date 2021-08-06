import React from "react";
import {useState} from 'react';
import {TextInput} from 'react-native';


const SearchBar = ({placeholder, onSearch, isSearching, isEmpty = false}) =>{

    const [query,setQuery] = useState("");

    return (
        <TextInput style = {{fontSize: 17}}
            value = {isEmpty?"":query}
            focussed = {false}
            placeholder = {placeholder}
            placeholderTextColor = 'grey'
            autoCapitalize = 'none'
            keyboardType = 'web-search'
            autoCorrect = {false}
            textColor = 'black'
            underlineColorAndroid={'grey'}
            onChangeText = {value => { if(value.length>0) isSearching(true); setQuery(value); onSearch(query);}}/>
    );
}

export default SearchBar;