import { useEffect, useState } from "react";
import CurrencySelect from "./CurrencySelect";

const ConverterForm = () => {
    const [amount, setAmount] = useState(1);
    const [displayAmount, setDisplayAmount] = useState("1");
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("PKR");
    const [result, setResult] = useState("");
    const [formattedFromAmount, setFormattedFromAmount] = useState("");
    const [formattedToAmount, setFormattedToAmount] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSwapCurrencies = () => {
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
    }

    const getExchangeRate = async () => {
        const API_KEY = "773f9687b1924d33b6f1197b75f97446"; // Your Open Exchange Rates API key
        const API_URL = `https://openexchangerates.org/api/latest.json?app_id=${API_KEY}`;

        if (isLoading) return;
        setIsLoading(true);

        try {
            const response = await fetch(API_URL);
            if (!response.ok) throw new Error("Something went wrong!");

            const data = await response.json();
            const rates = data.rates;
            
            if (rates[fromCurrency] && rates[toCurrency]) {
                const rate = (amount * (rates[toCurrency] / rates[fromCurrency])).toFixed(2);
                setResult(`${amount} ${fromCurrency} = ${rate} ${toCurrency}`);
                setFormattedFromAmount(formatAmount(amount, fromCurrency));
                setFormattedToAmount(formatAmount(rate, toCurrency));
            } else {
                setResult("Currency not available");
            }
        } catch (error) {
            setResult("Something went wrong!");
        } finally {
            setIsLoading(false);
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        getExchangeRate();
    }

    const formatAmount = (amount, currencyCode) => {
        if (amount < 10000) {
            return `${currencyCode} ${amount}`;
        }

        const absAmount = Math.abs(amount);
        let formattedAmount = '';

        if (absAmount >= 1e12) {
            formattedAmount = `${(amount / 1e12).toFixed(2)} trillion`;
        } else if (absAmount >= 1e9) {
            formattedAmount = `${(amount / 1e9).toFixed(2)} billion`;
        } else if (absAmount >= 1e6) {
            formattedAmount = `${(amount / 1e6).toFixed(2)} million`;
        } else if (absAmount >= 1e3) {
            formattedAmount = `${(amount / 1e3).toFixed(2)} thousand`;
        }

        return `${formattedAmount}`;
    }

    const handleAmountChange = (e) => {
        const value = e.target.value;
        setAmount(value);
        setDisplayAmount(value.slice(0, 12));
    }

    useEffect(() => {
        getExchangeRate();
    }, [fromCurrency, toCurrency, amount]);

    return (
        <div className="container">
            <form className="converter-form" onSubmit={handleFormSubmit}>
                <div className="form-group">
                    <label className="form-label">Enter Amount</label>
                    <input
                        type="text"
                        className="form-input"
                        value={displayAmount}
                        onChange={handleAmountChange}
                        required
                    />
                    <p className="amount-format">
                        {formattedFromAmount}
                    </p>
                </div>

                <div className="form-group form-currency-group">
                    <div className="form-section">
                        <label className="form-label">From</label>
                        <CurrencySelect
                            selectedCurrency={fromCurrency}
                            handleCurrency={e => setFromCurrency(e.target.value)}
                        />
                    </div>

                    <div className="swap-icon" onClick={handleSwapCurrencies}>
                        <svg width="16" viewBox="0 0 20 19" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.13 11.66H.22a.22.22 0 0 0-.22.22v1.62a.22.22 0 0 0 .22.22h16.45l-3.92 4.94a.22.22 0 0 0 .17.35h1.97c.13 0 .25-.06.33-.16l4.59-5.78a.9.9 0 0 0-.7-1.43zM19.78 5.29H3.34L7.26.35A.22.22 0 0 0 7.09 0H5.12a.22.22 0 0 0-.34.16L.19 5.94a.9.9 0 0 0 .68 1.4H19.78a.22.22 0 0 0 .22-.22V5.51a.22.22 0 0 0-.22-.22z"
                                fill="#fff" />
                        </svg>
                    </div>

                    <div className="form-section">
                        <label className="form-label">To</label>
                        <CurrencySelect
                            selectedCurrency={toCurrency}
                            handleCurrency={e => setToCurrency(e.target.value)}
                        />
                    </div>
                </div>

                <div className="button-container">
                    <button type="submit" className={`${isLoading ? "loading" : ""} submit-button`}>
                        Get Exchange Rate
                    </button>
                </div>

                <p className="exchange-rate-result">
                    {isLoading ? "Getting exchange rate..." : `${result} (${formattedToAmount})`}
                </p>
                <footer className="footer">
                <p className="footer-about-me">Developed by <strong>Abdur Rahman</strong></p>
                <p className="footer-links">
                    For more details, visit my <a href="https://github.com/abdurehman760" target="_blank" rel="noopener noreferrer">GitHub</a> or <a href="https://InDevelopment.com" target="_blank" rel="noopener noreferrer">Website</a>.
                </p>
                <p className="footer-details">© 2024 Currency Converter. All rights reserved.</p>
            </footer>
            </form>

           
        </div>
    )
}

export default ConverterForm;
