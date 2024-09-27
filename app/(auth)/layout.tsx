const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex h-screen">
            <div className="m-auto">
                {children}
            </div>
        </div>
    );
};

export default AuthLayout;
