import { createContext } from "react";

const modalsContext = createContext({
  isValueModalOpen: false,
  isEmailSentModalOpen: false,
  openValueModal: () => {},
  closeValueModal: () => {},
  openEmailSentModal: () => {},
  closeEmailSentModal: () => {},
});

export const modalsContextProvider = ({ children }) => {
  const [isValueModalOpen, setIsValueModalOpen] = useState(false);
  const [isEmailSentModalOpen, setIsEmailSentModalOpen] = useState(false);

  const openValueModal = () => {
    setIsValueModalOpen(true);
  };

  const openEmailSentModal = () => {
    setIsEmailSentModalOpen(true);
  };

  const closeValueModal = () => {
    setIsValueModalOpen(false);
  };

  const closeEmailSentModal = () => {
    setIsEmailSentModalOpen(false);
  };

  const providerValues = {
    isValueModalOpen,
    isEmailSentModalOpen,
    openValueModal,
    closeValueModal,
    openEmailSentModal,
    closeEmailSentModal,
  };

  return (
    <modalsContext.Provider value={providerValues}>
      {children}
    </modalsContext.Provider>
  );
};

export default modalsContext;
