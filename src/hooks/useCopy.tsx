export default function useCopy() {
  const copyToClipboard = async (text: string): Promise<void> => {
    await navigator.clipboard.writeText(text)
  }

  return copyToClipboard
}
