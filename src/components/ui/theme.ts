import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
    globalCss:{
        body:{
            bg: "bg",
            color: "text",
        }
    },
    theme:{
        semanticTokens:{
            colors:{
                bg:{
                    value:{
                        base: "#f7fafc", //Light Mode
                        _dark:"#121212" //Dark Mode
                    }
                },
                text:{
                    value:{
                        base: "#26262b",
                        _dark: "#f4f4f5"
                    }
                },
                fg:{
                    value:{
                        base: "#26262b",
                        _dark: "#f4f4f5"
                    }
                },
                card_border:{
                    value:{
                        base: "#e8e8ee",
                        _dark: "#262626"
                    }
                },
                skeleton:{
                    value:{
                        base: "#f4f4f5",
                        _dark: "#404040"
                    }
                },
                primary:{
                    value:{
                        base: "#0d9488",
                        _dark: "#2dd4bf"
                    }
                }
            }
        }
    }
})

export const system = createSystem(defaultConfig, config)