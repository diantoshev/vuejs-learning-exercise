export default function useValidateInput(titleInput, descriptionInput, linkInput) {
  return titleInput.value === '' ||
    descriptionInput.value === '' ||
    linkInput.value === '';
}