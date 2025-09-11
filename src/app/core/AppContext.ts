import * as React from "react";
import MyPlugin from "../../main";

// Create a context that will hold our plugin instance
export const AppContext = React.createContext<MyPlugin | null>(null);

// Export a singleton instance for easy access
