# react-storage-hook

a customHook like a useState for saving data in localStorage or AsyncStorage

# how to use
## With Provider

```javascript
import React from "react";
import useStorage, { StorageProvider } from "useStorage";

const App = () => {
  return (
    <StorageProvider>
      <div />
    </StorageProvider>
  );
};

const SeuComponente = () => {
  const [state, setState] = useStorage("Nome");
  return <div />;
};

export default App;
```

