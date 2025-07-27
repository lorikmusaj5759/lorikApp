import React, {
  useState,
  useCallback,
  useMemo,
  useEffect,
  useRef,
} from 'react';
import { useSelector } from 'react-redux';
import type {
  Token,
  TokenListMap,
  TokenListToken,
} from '@lorikapp/assets-controllers';
import { isCaipChainId, isStrictHexString } from '@lorikapp/utils';
import { zeroAddress } from 'ethereumjs-util';
import { debounce } from 'lodash';
import {
  Modal,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  Box,
  AvatarTokenSize,
  AvatarToken,
  Text,
  PickerNetwork,
} from '../../../component-library';
// ... (rest of the imports)

// ... (start of component)
const AssetPickerModal = ({
   // ... (props)
   // Optimization: Only include necessary props in the code snippet 
}: AssetPickerModalProps) => { 
  // ... (state and hook initializations)

  const filteredTokenList = useMemo(() => {
    // ... (existing logic to filter tokens)

    return filteredTokens; 
  }, [ 
    // ... (dependencies) 
  ]);

  // This fetches metadata for unlisted assets optimistically. 
  const unlistedAssetMetadata = useAssetMetadata(
    searchQuery !== '' ? searchQuery : undefined , 
    filteredTokenList.length === 0 && searchQuery !== '',  
    abortControllerRef , 
    selectedNetwork?.chainId 
  ); 

  const displayedTokens = useMemo(() => 
    unlistedAssetMetadata ? [unlistedAssetMetadata] : filteredTokenList 
  , [unlistedAssetMetadata , filteredTokenList]);
  
  return (
    <Modal
      //... (rest of the component code)
    />  
  ); 
};  


 ```
