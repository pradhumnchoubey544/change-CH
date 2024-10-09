useref
usecallback
usememo
useeffect
usestate:-every on single state change it will render full component

 
<Fragment>, alternatively written as <>...</>, lets you group multiple JSX nodes together.
<Profiler> lets you measure rendering performance of a React tree programmatically.
<Suspense> lets you display a fallback while the child components are loading.
<StrictMode> enables extra development-only checks that help you find bugs early.





# error boundry compoent:- we rap the small chunk of code so it that spacific data did not come it will show message.


# API
createContext lets you define and provide context to the child components. Used with useContext.
forwardRef lets your component expose a DOM node as a ref to the parent. Used with useRef.
lazy lets you defer loading a component’s code until it’s rendered for the first time.
memo lets your component skip re-renders with same props. Used with useMemo and useCallback.
startTransition lets you mark a state update as non-urgent. Similar to useTransition.
act lets you wrap renders and interactions in tests to ensure updates have processed before making assertions.


#useFormState=> helps simplify form state management and improves the performance of your forms by tracking specific states efficiently 
                it show {dispaly validation error ,fromSubmitStatus, Displays a message if the form has been modified from its initial state.}


                