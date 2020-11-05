const NationForm = () => {
  const [name, setName] = useState("");
  const [isoLongCode, setIsoLongCode] = useState("");
  const [isoShortCode, setIsoShortCode] = useState("");
  const [unCode, setUnCode] = useState("");
  const [telCode, setTelCode] = useState("");
  const [regionType, setRegionType] = useState("");
  const [NationCreated, setNationCreated] = useState(false);

  const nameChange = (e) => setName(e.target.value);
  const longCodeChange = (e) => setIsoLongCode(e.target.value);
  const shortCodeChange = (e) => setIsoShortCode(e.target.value);
  const unCodeChange = (e) => setUnCode(e.target.value);
  const telCodeChange = (e) => setTelCode(e.target.value);
  const regionTypeChange = (e) => setRegionType(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = {
      name: name,
      iso_long_code: isoLongCode,
      iso_short_code: isoShortCode,
      un_code: unCode,
      tel_code: telCode,
      region_type: regionType,
    };

    console.log("You entered: ", data);
    setNationCreated(true);
  };
};

export default NationForm;
