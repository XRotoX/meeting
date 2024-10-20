import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { ACTIONS } from '../../utils/useForm';

export default function CountrySelect(props) {
    const { values, dispatch } = props
    const handleChange = (value) => {
        dispatch({
            type: ACTIONS.SET_ITEM,
            payload: {
                timezone: value
            }
        })
    }
    return (
        <Autocomplete
            id="country-select-demo"
            sx={{ width: 300 }}
            options={countries}
            autoHighlight
            onChange={(e, value) => handleChange(value)}
            getOptionLabel={(option) => option.name}
            renderOption={(props, option) => (
                <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                    <img
                        loading="lazy"
                        width="20"
                        src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                        srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                        alt=""
                    />
                    {option.name} (GMT{option.gmt})
                </Box>
            )}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Choose a country"
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password', // disable autocomplete and autofill
                    }}
                />
            )}
        />
    );
}

// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js
const countries = [
    { name: "Afghanistan", code: "AF", gmt: "+04:30" },
    { name: "Albania", code: "AL", gmt: "+01:00" },
    { name: "Algeria", code: "DZ", gmt: "+01:00" },
    { name: "Argentina", code: "AR", gmt: "-03:00" },
    { name: "Armenia", code: "AM", gmt: "+04:00" },
    { name: "Australia", code: "AU", gmt: "+11:00" },
    { name: "Austria", code: "AT", gmt: "+01:00" },
    { name: "Azerbaijan", code: "AZ", gmt: "+04:00" },
    { name: "Bahrain", code: "BH", gmt: "+03:00" },
    { name: "Bangladesh", code: "BD", gmt: "+06:00" },
    { name: "Belarus", code: "BY", gmt: "+03:00" },
    { name: "Belgium", code: "BE", gmt: "+01:00" },
    { name: "Belize", code: "BZ", gmt: "-06:00" },
    { name: "Bhutan", code: "BT", gmt: "+06:00" },
    { name: "Bolivia", code: "BO", gmt: "-04:00" },
    { name: "Bosnia and Herzegovina", code: "BA", gmt: "+01:00" },
    { name: "Botswana", code: "BW", gmt: "+02:00" },
    { name: "Brazil", code: "BR", gmt: "-02:00" },
    { name: "Brunei", code: "BN", gmt: "+08:00" },
    { name: "Bulgaria", code: "BG", gmt: "+02:00" },
    { name: "Cambodia", code: "KH", gmt: "+07:00" },
    { name: "Cameroon", code: "CM", gmt: "+01:00" },
    { name: "Canada", code: "CA", gmt: "-03:30" },
    { name: "Chile", code: "CL", gmt: "-04:00" },
    { name: "China", code: "CN", gmt: "+08:00" },
    { name: "Colombia", code: "CO", gmt: "-05:00" },
    { name: "Congo (DRC)", code: "CD", gmt: "+01:00" },
    { name: "Costa Rica", code: "CR", gmt: "-06:00" },
    { name: "Côte d’Ivoire", code: "CI", gmt: "+00:00" },
    { name: "Croatia", code: "HR", gmt: "+01:00" },
    { name: "Cuba", code: "CU", gmt: "-05:00" },
    { name: "Czech Republic", code: "CZ", gmt: "+01:00" },
    { name: "Denmark", code: "DK", gmt: "+01:00" },
    { name: "Djibouti", code: "DJ", gmt: "+03:00" },
    { name: "Dominican Republic", code: "DO", gmt: "-04:00" },
    { name: "Ecuador", code: "EC", gmt: "-05:00" },
    { name: "Egypt", code: "EG", gmt: "+02:00" },
    { name: "El Salvador", code: "SV", gmt: "-06:00" },
    { name: "Eritrea", code: "ER", gmt: "+03:00" },
    { name: "Estonia", code: "EE", gmt: "+02:00" },
    { name: "Ethiopia", code: "ET", gmt: "+03:00" },
    { name: "Faroe Islands", code: "FO", gmt: "+00:00" },
    { name: "Finland", code: "FI", gmt: "+02:00" },
    { name: "France", code: "FR", gmt: "+01:00" },
    { name: "Georgia", code: "GE", gmt: "+04:00" },
    { name: "Germany", code: "DE", gmt: "+01:00" },
    { name: "Greece", code: "GR", gmt: "+02:00" },
    { name: "Greenland", code: "GL", gmt: "-03:00" },
    { name: "Guatemala", code: "GT", gmt: "-06:00" },
    { name: "Haiti", code: "HT", gmt: "-05:00" },
    { name: "Honduras", code: "HN", gmt: "-06:00" },
    { name: "Hong Kong SAR", code: "HK", gmt: "+08:00" },
    { name: "Hungary", code: "HU", gmt: "+01:00" },
    { name: "Iceland", code: "IS", gmt: "+00:00" },
    { name: "India", code: "IN", gmt: "+05:30" },
    { name: "Indonesia", code: "ID", gmt: "+07:00" },
    { name: "Iran", code: "IR", gmt: "+03:30" },
    { name: "Iraq", code: "IQ", gmt: "+03:00" },
    { name: "Ireland", code: "IE", gmt: "+00:00" },
    { name: "Israel", code: "IL", gmt: "+02:00" },
    { name: "Italy", code: "IT", gmt: "+01:00" },
    { name: "Jamaica", code: "JM", gmt: "-05:00" },
    { name: "Japan", code: "JP", gmt: "+09:00" },
    { name: "Jordan", code: "JO", gmt: "+02:00" },
    { name: "Kazakhstan", code: "KZ", gmt: "+06:00" },
    { name: "Kenya", code: "KE", gmt: "+03:00" },
    { name: "Korea", code: "KR", gmt: "+09:00" },
    { name: "Kuwait", code: "KW", gmt: "+03:00" },
    { name: "Kyrgyzstan", code: "KG", gmt: "+06:00" },
    { name: "Laos", code: "LA", gmt: "+07:00" },
    { name: "Latvia", code: "LV", gmt: "+02:00" },
    { name: "Lebanon", code: "LB", gmt: "+02:00" },
    { name: "Libya", code: "LY", gmt: "+02:00" },
    { name: "Liechtenstein", code: "LI", gmt: "+01:00" },
    { name: "Lithuania", code: "LT", gmt: "+02:00" },
    { name: "Luxembourg", code: "LU", gmt: "+01:00" },
    { name: "Macao SAR", code: "MO", gmt: "+08:00" },
    { name: "Macedonia, FYRO", code: "MK", gmt: "+01:00" },
    { name: "Malaysia", code: "MY", gmt: "+08:00" },
    { name: "Maldives", code: "MV", gmt: "+05:00" },
    { name: "Mali", code: "ML", gmt: "+00:00" },
    { name: "Malta", code: "MT", gmt: "+01:00" },
    { name: "Mexico", code: "MX", gmt: "-06:00" },
    { name: "Moldova", code: "MD", gmt: "+02:00" },
    { name: "Monaco", code: "MC", gmt: "+01:00" },
    { name: "Mongolia", code: "MN", gmt: "+08:00" },
    { name: "Montenegro", code: "ME", gmt: "+01:00" },
    { name: "Morocco", code: "MA", gmt: "+01:00" },
    { name: "Myanmar", code: "MM", gmt: "+06:30" },
    { name: "Nepal", code: "NP", gmt: "+05:45" },
    { name: "Netherlands", code: "NL", gmt: "+01:00" },
    { name: "New Zealand", code: "NZ", gmt: "+12:00" },
    { name: "Nicaragua", code: "NI", gmt: "-06:00" },
    { name: "Nigeria", code: "NG", gmt: "+01:00" },
    { name: "Norway", code: "NO", gmt: "+01:00" },
    { name: "Oman", code: "OM", gmt: "+04:00" },
    { name: "Pakistan", code: "PK", gmt: "+05:00" },
    { name: "Panama", code: "PA", gmt: "-05:00" },
    { name: "Paraguay", code: "PY", gmt: "-04:00" },
    { name: "Peru", code: "PE", gmt: "-05:00" },
    { name: "Philippines", code: "PH", gmt: "+08:00" },
    { name: "Poland", code: "PL", gmt: "+01:00" },
    { name: "Portugal", code: "PT", gmt: "+00:00" },
    { name: "Puerto Rico", code: "PR", gmt: "-04:00" },
    { name: "Qatar", code: "QA", gmt: "+03:00" },
    { name: "Réunion", code: "RE", gmt: "+04:00" },
    { name: "Romania", code: "RO", gmt: "+02:00" },
    { name: "Russia", code: "RU", gmt: "+03:00" },
    { name: "Rwanda", code: "RW", gmt: "+02:00" },
    { name: "Saudi Arabia", code: "SA", gmt: "+03:00" },
    { name: "Senegal", code: "SN", gmt: "+00:00" },
    { name: "Serbia", code: "RS", gmt: "+01:00" },
    { name: "Singapore", code: "SG", gmt: "+08:00" },
    { name: "Slovakia", code: "SK", gmt: "+01:00" },
    { name: "Slovenia", code: "SI", gmt: "+01:00" },
    { name: "Somalia", code: "SO", gmt: "+03:00" },
    { name: "South Africa", code: "ZA", gmt: "+02:00" },
    { name: "Spain", code: "ES", gmt: "+01:00" },
    { name: "Sri Lanka", code: "LK", gmt: "+05:30" },
    { name: "Sweden", code: "SE", gmt: "+01:00" },
    { name: "Switzerland", code: "CH", gmt: "+01:00" },
    { name: "Syria", code: "SY", gmt: "+02:00" },
    { name: "Taiwan", code: "TW", gmt: "+08:00" },
    { name: "Tajikistan", code: "TJ", gmt: "+05:00" },
    { name: "Thailand", code: "TH", gmt: "+07:00" },
    { name: "Trinidad and Tobago", code: "TT", gmt: "-04:00" },
    { name: "Tunisia", code: "TN", gmt: "+01:00" },
    { name: "Turkey", code: "TR", gmt: "+02:00" },
    { name: "Turkmenistan", code: "TM", gmt: "+05:00" },
    { name: "Ukraine", code: "UA", gmt: "+02:00" },
    { name: "United Arab Emirates", code: "AE", gmt: "+04:00" },
    { name: "United Kingdom", code: "GB", gmt: "+00:00" },
    { name: "United States", code: "US", gmt: "-05:00" },
    { name: "Uruguay", code: "UY", gmt: "-03:00" },
    { name: "Uzbekistan", code: "UZ", gmt: "+05:00" },
    { name: "Venezuela", code: "VE", gmt: "-04:00" },
    { name: "Vietnam", code: "VN", gmt: "+07:00" },
    { name: "Yemen", code: "YE", gmt: "+03:00" },
    { name: "Zimbabwe", code: "ZW", gmt: "+02:00" }
]
