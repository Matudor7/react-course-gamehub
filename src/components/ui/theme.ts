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
                        _dark:"#18181b" //Dark Mode
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
                        _dark: "#33333a"
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