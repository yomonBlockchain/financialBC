import { Link } from "react-router-dom";
import LOGO from "../assets/logo.png";
import { useAccount, useConnect, useDisconnect } from "wagmi";

const Header = () => {
  /* Router */
  // const navigate = useNavigate();
  /* State */
  const { isConnected, address } = useAccount();
  const { connect, connectors, isLoading, pendingConnector } = useConnect();
  const { disconnect } = useDisconnect();
  /* Hooks */
  /* Render */
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}

            <Link className="block group" aria-label="Cruip" to="/">
              <img src={LOGO} alt="" width={128} />
            </Link>
          </div>
          {/* Desktop navigation */}
          <nav className="flex grow">
            {/* Desktop sign in links */}
            {isConnected ? (
              <ul className="flex grow justify-end flex-wrap items-center">
                <li>
                  <div
                    className="btn-sm text-white bg-blue-500 hover:bg-blue-600 w-full shadow-sm"
                    to="/signin"
                  >
                    {address}
                  </div>
                </li>
                <li>
                  <div
                    className="font-medium text-gray-600 decoration-blue-500 decoration-2 underline-offset-2 hover:underline px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                    onClick={() => disconnect()}
                  >
                    Logout
                  </div>
                </li>
              </ul>
            ) : (
              <ul className="flex grow justify-end flex-wrap items-center">
                <li>
                  <div
                    className="font-medium text-gray-600 decoration-blue-500 decoration-2 underline-offset-2 hover:underline px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                    to="/signin"
                    onClick={() => connect({ connector: connectors[0] })}
                  >
                    Sign in
                    {isLoading &&
                      pendingConnector?.id === connectors[0].id &&
                      `connecting`}
                  </div>
                </li>

                <li className="ml-3">
                  <Link
                    className="btn-sm text-white bg-blue-500 hover:bg-blue-600 w-full shadow-sm"
                    to={{ pathname: "/signup" }}
                  >
                    Join
                  </Link>
                </li>
              </ul>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
