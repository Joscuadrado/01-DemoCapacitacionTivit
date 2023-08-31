Feature: Pagina de Login
    Como usuario quiero poder iniciar sesion en el aplicativo

    Background:
        Given Abre navegador e ingresa URL del aplicativo

    Scenario: Login exitoso
        When Usuario ingresa su nombre de usuario <usuario>, y clave <clave>, y da clic en el btn ingresar
        Then Ingresa al home y la url debe contener el texto inventory

        Examples:
            | usuario         | clave          |
            | "standard_user" | "secret_sauce" |

    Scenario: Login Fail
        When Usuario ingresa su nombre de usuario <usuario>, y clave <clave>, y da clic en el btn ingresar
        Then Muestra mensaje de error <alerta>

        Examples:
            | usuario           | clave          | alerta                                                |
            | "locked_out_user" | "secret_sauce" | "Epic sadface: Sorry, this user has been locked out." |

    Scenario: Login erroneo user o pass
        When Usuario ingresa su nombre de usuario <usuario>, y clave <clave>, y da clic en el btn ingresar
        Then Muestra mensaje usuario o paswword incorrecto <alerta1>

        Examples:
            | usuario      | clave  | alerta1                                                                     |
            | "Pepe Lucho" | "test" | "Epic sadface: Username and password do not match any user in this service" |