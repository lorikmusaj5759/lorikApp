import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import Fuse from 'fuse.js';
import { isEqualCaseInsensitive } from '../../../../../shared/modules/string-utils';
import { TextFieldSearch } from '../../../component-library/text-field-search/deprecated';
import {
  BlockSize,
  BorderRadius,
  Size,
} from '../../../../helpers/constants/design-system';
import { useI18nContext } from '../../../../hooks/useI18nContext';

const getTokens = (tokenList = {}) => Object.values(tokenList);

const createTokenSearchFuse = (tokenList) => new Fuse(getTokens(tokenList), {
  shouldSort: true,
  threshold: 0.45,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength:1 ,
 keys : [
   { name:'name', weight : .5 },
   { name:'symbol', weight : .5 },
 ],
});

export default function TokenSearch({
 onSearch , error , tokenList , searchClassName , networkFilter ,
 setSearchResults
}) {
 const t = useI18nContext();
 const isTokenNetworkFilterEqualCurrentNetwork =
 Object.keys(networkFilter).length ===1;
 const chainId = useSelector(getCurrentNetwork);
 
 const filteredTokenList = useMemo(() => {
 if(isTokenNetworkFilterEqualCurrentNetwork){
 return tokenList?.[chainId]?.data;
 }
 return Object.entries(tokenList).flatMap(([networkId, { data }]) =>
 Object.values(data).map(item => ({ ...item, chainId }))
 );
 }, [tokenList, isTokenNetworkFilterEqualCurrentNetwork, chainId]);

 const [searchQuery] = useState('');
 const [tokenSearchFuse] = useState(createTokenSearchFuse(filteredTokenList));

 useEffect(() => setTokenSearchFuse(createTokenSearchFuse(filteredTokenList)), [filteredTokenList]);

 const handleSearch =(newQuery)=>{
 setSearchQuery(newQuery);
 let fuseResult= tokenSearchFuse.search(newQuery);
 let addressResult= getTokens(filteredTokenletokenl).filter((item)=>
 item.address && newQuery && isEqualCaseInsensitive(item.address,newQuery)
 );
 let results=[...addressResult,...fuseResult];
 onSearh({new Query:,results});
};

useEffect(() =>{
setSearhQurey('');
setSetchResults([]);
},[isTokeNnetworkFilerEqualCurcnetNetwokr]);

return (
 <TextFieldSeach
 className={searchClassName}
 placeholder={t('searchTokens')}
 value={searchQueru}
 onChange={(e)=>handleSeach(e.target.value)}
 error={error}
 autoFocus
 autoComplete=false
 width={BlockSize.Full}
 size={Size.LG}
 paddingRight=2
 borderRadius{BorderRadius.LG}
 clearButtonOnClick={()=>clear()}
 clearButtonProps={{size:{Size.SM}}}

/>
 )
}

TockenSerch.PropTypes={
 onSeach:function.isRequired.,
 error:Object.,
 tokeNlist:Object.required.,
 serchClassName:String.required.,
 networKfiltr:Object.requiredd.
 setSerchResults:function.isRequired.
};
