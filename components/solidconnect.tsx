import { LogoutButton, useSession } from "@inrupt/solid-ui-react";
import LoginForm from './login';
import styles from '../styles/Home.module.css';

export default function ConnectSolid() {

    const { session, sessionRequestInProgress } = useSession();

    return (
        <div className={styles.thirteen}>
            <h4>Connect to Solid POD</h4>
            {!sessionRequestInProgress && session.info.isLoggedIn && (
                <LogoutButton onError={console.error} onLogout={() => window.location.reload()}></LogoutButton>
            )}
              
            {!sessionRequestInProgress && !session.info.isLoggedIn && <LoginForm />}
        </div>
      
    );
}

export function checkLogin() {





}