import { useEffect, useState, createRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CopiedyMsg from "./CopiedyMsg";

const Main = ({ theme, setTheme }) => {
  const inputField = createRef();
  const [output, setOutput] = useState("Output Here");
  const [input, setInput] = useState("");
  const [showCopied, setShowCopied] = useState(false);
  const [isdarkModeOn, setIsDarkModeOn] = useState(() => {
    if (!localStorage.getItem("darkmode")) return "";
    return localStorage.getItem("darkmode");
  });

  const copyToClipboard = () => {
    inputField.current.select();
    inputField.current.setSelectionRange(0, 99999);
    document.execCommand("copy");
    console.log("Copied the text: " + inputField.current.value);
    setShowCopied(true);
  };

  useEffect(() => {
    if (!input) return setOutput("");
    const text = input.trim().split(" ");
    const fullText = [];
    text.forEach((word) => {
      if (word.length <= 1) return setOutput("");
      fullText.push(word[0] + (word.length - 2) + word[word.length - 1]);
    });
    const result = fullText.join("");
    setOutput(result);
  }, [input]);

  useEffect(() => {
    if (showCopied) {
      setTimeout(() => {
        setShowCopied(false);
      }, 2500);
    }
  }, [showCopied]);

  useEffect(() => {
    if (isdarkModeOn) {
      setTheme("text-darkprimary bg-darkprimary");
      localStorage.setItem("darkmode", true);
    } else {
      setTheme("text-lightprimary bg-lightprimary");
      localStorage.setItem("darkmode", "");
    }
  }, [isdarkModeOn, setTheme]);

  return (
    <>
      <motion.main
        className={`${theme} relative justify-evenly  max-w-sm h-96 mx-auto flex flex-col items-center p-5`}
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      >
        <section
          className="fixed top-4 right-4"
          onClick={() => setIsDarkModeOn(!isdarkModeOn)}
        >
          {isdarkModeOn ? (
            <AnimatePresence>
              <motion.svg
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 1.5 }}
                className={`w-8 h-8 rounded-full p-1 ${"text-lightsecondary bg-lightsecondary"} cursor-pointer`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </motion.svg>
            </AnimatePresence>
          ) : (
            <AnimatePresence>
              <motion.svg
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ opacity: 0.2, y: 200 }}
                className={`w-8 h-8  rounded-full p-1 ${"text-darksecondary bg-darksecondary"} cursor-pointer`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </motion.svg>
            </AnimatePresence>
          )}
        </section>
        <div className="flex flex-col items-center space-y-4">
          <svg
            className={`w-20 h-20 ${
              isdarkModeOn
                ? "bg-blue-600 text-lightprimary"
                : "bg-blue-600  text-darkprimary"
            } rounded-full p-3 cursor-pointer`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
          <h1
            className={`uppercase text-center sm:text-2xl sm:font-black font-semibold text-lg ${
              isdarkModeOn ? "text-darkprimary" : "text-lightprimary"
            }  `}
          >
            Password Generator
          </h1>
          <div className="flex items-center space-x-1">
            <h3
              className={`uppercase text-center sm:text-xs sm:font-normal font-normal text-xs ${
                isdarkModeOn ? "text-darkprimary" : "text-lightprimary"
              }  `}
            >
              <a
                href="https://www.facebook.com/Moroccan.Hack3rs/posts/3804404489596867"
                target="_blank"
                rel="noopener noreferrer"
              >
                Moroccan Hackers
              </a>
            </h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </div>
        </div>
        <div className="w-full">
          <input
            spellCheck="false"
            ref={inputField}
            className={`w-full h-10 rounded-sm border border-opacity-20 focus:outline-none px-5 py-2 font-medium ${theme}`}
            type="text"
            value={input}
            placeholder="Type the text here"
            onChange={(e) => setInput(e.target.value)}
          />
        </div>

        {output && (
          <AnimatePresence>
            <motion.div
              className="relative w-full flex items-center"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
            >
              <AnimatePresence>{showCopied && <CopiedyMsg />}</AnimatePresence>
              <svg
                className="absolute right-2 cursor-pointer hover:scale-105 w-5 h-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={copyToClipboard}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              <h2 className="flex-1 shadow-md border py-2 items-center text-center max-w-full  text-blue-600 text-lg font-semibold">
                {output}
              </h2>
            </motion.div>
          </AnimatePresence>
        )}
      </motion.main>
    </>
  );
};

export default Main;
