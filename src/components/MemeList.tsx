import { Grid } from '@giphy/react-components'
import { GifsResult } from '@giphy/js-fetch-api'
import { IGif } from '@giphy/js-types'
import { memo } from 'react'
import useCopy from '../hooks/useCopy'
import { useSnackbar } from '../contexts/SnackbarContext'

type Props = {
  searchKey: string
  fetch: (offset: number) => Promise<GifsResult>
}

function MemeList({ searchKey, fetch }: Props) {
  const copyToClipboard = useCopy()
  const { setSnackbar } = useSnackbar()
  const onClickMeme = (item: IGif) => {
    try {
      if (!item?.images?.preview_gif?.url) {
        throw new Error('No preview gif found')
      }
      copyToClipboard(item.images.preview_gif.url)
      setSnackbar('Copied!', 'success')
    } catch {
      setSnackbar('Failed to copy!', 'fail')
    }
  }

  return (
    <section>
      <Grid
        onGifClick={onClickMeme}
        width={600}
        columns={3}
        fetchGifs={fetch}
        noLink
        className="cursor-pointer"
        hideAttribution
        key={searchKey}
      />
    </section>
  )
}

export default memo(MemeList)
