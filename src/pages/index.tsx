import styles from '../styles/pages/Index.module.css';

export default function Index() {
    return (
        <div className={styles.indexContainer}>
            <section>
                <div className={styles.imageBox}>
                    <img src="icons/simbolo.svg" alt="Move it" />
                </div>
                <div className={styles.authenticationBox}>
                    <img src="logo.svg" alt="Logo" />

                    <p>Bem-vindo</p>

                    <div>
                        <img src="icons/github.svg" alt="Github" />
                        <span>Faça login com seu Github para começar</span>
                    </div>

                    <div>
                        <input type="text" name="" id="username-github" placeholder="Digite seu username" />
                        <button type="button"><img src="icons/arrow-right.svg" alt="Entrar" /></button>
                    </div>
                </div>
            </section>
        </div>
    );
}