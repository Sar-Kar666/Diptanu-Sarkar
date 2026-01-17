export default function Footer() {
    return (
        <footer className="mb-24 flex flex-col items-center justify-center space-y-4 px-4 py-8 text-center text-sm opacity-60">
            <p className="text-gray-500">
                © {new Date().getFullYear()} Portfolio. All rights reserved.
            </p>
        </footer>
    );
}
