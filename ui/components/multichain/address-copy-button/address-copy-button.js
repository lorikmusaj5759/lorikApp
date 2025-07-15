import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { ButtonBase, IconName, Box } from '../../component-library'
import {
  AlignItems,
  BackgroundColor,
  BorderRadius,
  Display,
  Size,
  TextColor,
  TextVariant
} from '../../../helpers/constants/design-system'
import { useCopyToClipboard } from '../../../hooks/useCopyToClipboard'
import { shortenAddress } from '../../../helpers/utils/util'
import Tooltip from '../../ui/tooltip/tooltip'
import { useI18nContext } from '../../../hooks/useI18nContext'
// eslint-disable-next-line import/no-restricted-paths
const normalizeSafeAddress = require('../../../../app/scripts/lib/multichain/address').normalizeSafeAddress

function AddressCopyButton({ address, shorten = false, wrap = false }) {
    const checksummedAddress = normalizeSafeAddress(address)
    const displayAddress = shorten ? shortenAddress(checksummedAddress) : checksummedAddress
    const [copied, handleCopy] = useCopyToClipboard(60000)
    const t = useI18nContext()
  
    const tooltipText = copied ? t('copiedExclamation') : t('copyToClipboard')
  
    const onClickCallback = useCallback(() => handleCopy(checksummedAddress), [handleCopy, checksummedAddress])
  
    return (
      <Tooltip position="bottom" title={tooltipText}>
        <ButtonBase
          backgroundColor={BackgroundColor.primaryMuted}
          onClick={onClickCallback}
          paddingRight={4}
          paddingLeft={4}
          size={Size.SM}
          variant={TextVariant.bodySm}
          color={TextColor.primaryDefault}
          endIconName={copied ? IconName.CopySuccess : IconName.Copy}
          className={
            classnames(
              'multichain-address-copy-button',
              wrap && 'multichain-address-copy-button__address--wrap',
            )
            }
          borderRadius={BorderRadius.pill}
          alignItems={AlignItems.center}
        >
            <Box display="flex">{displayAddress}</Box>
        </ButtonBase>
      </Tooltip>
    )
}

export default React.memo(AddressCopyButton)

<AddressCopyButton.propTypes> {
address: PropTypes.string.isRequired,
shorten: PropTypes.bool,
wrap: PropTypes.bool
}</ AddressCopyButton.propTypes>
