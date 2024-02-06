import { Link, useNavigate } from "react-router-dom";
import Button from "../../Button";
import InputText from "../../InputText";
import { useState } from "react";
import http from "../../../http";
import { useNotification } from "../../../Context/notifications/NotificationContext";
import FormUserStyled from "./FormUserStyled";

interface FormUserProps {
    action: string,
    IdUser: string,
    Name: string,
    Email: string,
}


export default function FormUser({ action, IdUser, Name, Email }: FormUserProps) {
    const [idUser, setIdUser] = useState(IdUser);
    const [name, setName] = useState(Name);
    const [email, setEmail] = useState(Email);
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [error, setError] = useState("");
    const [errors, setErrors] = useState<string[]>([]); // Estado para armazenar a mensagem de erro
    const token = sessionStorage.getItem("token");
    const { showToast, dismissToast, openLoad } = useNotification();
    const navigate = useNavigate();


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newPassword) {
            showToast('Carregando');
            const user = {
                first_name: name,
                password: password,
                password_confirmation: password
            };

            http
                .put(`Accounts/${idUser}/`, user)
                .then((response) => {
                    dismissToast();
                    setErrors([])
                    showToast('Alterado com sucesso!', '✔️');
                })
                .catch((erro) => {
                    const errors = erro.response.data.errors;
                    setErrors(errors); // Define o estado 'errors' com o array de mensagens de erro
                    dismissToast();

                });
        } else {
            showToast('Alterando senha');
            const user = {
                password: password,
                new_password: newPassword
            };

            http
                .put(`Accounts/${idUser}/`, user)
                .then((response) => {
                    dismissToast();
                    setErrors([])
                    showToast('Senha alterada com sucesso!', '✔️');
                })
                .catch((erro) => {
                    const errors = erro.response.data.errors;
                    setErrors(errors); // Define o estado 'errors' com o array de mensagens de erro
                    dismissToast();

                });
        }
    };

    return (
        action === 'profile' ? (
            <FormUserStyled>
                <h1 className="h1 mb-6">Configurações de Perfil</h1>
                <div className="SingUp">
                    <form onSubmit={handleSubmit}>
                        <InputText
                            type="text"
                            label="*Nome"
                            placeholder="Escolha um username"
                            value={name}
                            required={true}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <InputText
                            type="email"
                            label="*Email"
                            placeholder="Digite seu email"
                            value={email}
                            required={true}
                            disabled={true}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <InputText
                            type="password"
                            label="*Digite sua senha para confirmar alteração"
                            placeholder="Escolha um username"
                            value={password}
                            required={true}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors && (
                            <div className="error-message">
                                <ul>
                                    {errors.map((error, index) => (
                                        <li key={index}>{error}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        <div className="save-profile">
                            <Button fontSize="16px" width="100px" height="20px" type="submit" value="Salvar" />
                        </div>
                    </form>
                </div>
            </FormUserStyled>
        ) : (
            <FormUserStyled>
                <h1 className="h1 mb-6">Configurações de Senha</h1>
                <div className="SingUp">
                    <form onSubmit={handleSubmit}>
                        <InputText
                            type="password"
                            label="*Sua antiga senha"
                            placeholder="Escolha um username"
                            value={password}
                            required={true}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <InputText
                            type="password"
                            label="*Nova senha"
                            placeholder="Digite seu email"
                            value={newPassword}
                            required={true}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                        {errors && (
                            <div className="error-message">
                                <ul>
                                    {errors.map((error, index) => (
                                        <li key={index}>{error}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        <div className="save-profile">
                            <Button fontSize="16px" width="auto" height="20px" type="submit" value="Alterar Senha" />
                        </div>
                    </form>
                </div>
            </FormUserStyled>
        )
    );
}
