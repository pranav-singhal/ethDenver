import React from "react";
import { Form, Row, Col, Button, File } from "react-bootstrap";
import {createRandomHex, uploadDocument} from "../../connections/Controller";
import { getClientJson } from "../../connections/httpInteractions";
import TransactionModal from "../TransactionModal";
export default class UploadPanel extends React.Component {
  constructor(props) {
    super(props);
    this.fileRef = React.createRef();
  }
  state = {
    clientAppJson: {},
    formData: [],
    generateForm: false,
    showModal: false,
    description:''
  };
  async componentWillMount() {
    // const clientAppJson = JSON.parse(localStorage.getItem("clientAppJson"));
  }
  async componentDidMount() {
    let clientAppJson = await getClientJson(this.props.appName);
    this.setState({description: clientAppJson.description})
    console.log("clientAppJson",clientAppJson);
    // clientAppJson = JSON.parse(localStorage.getItem('clientAppJson'));
    console.log("clientAppJson:", clientAppJson);
    this.setState({ clientAppJson: clientAppJson });
    this.addFormFields(clientAppJson.dataInfo);
    this.setState({ generateForm: true });
  }
  getDelegates = () => {
    return this.state.clientAppJson.delegateInfo;
  };
  getDataInfo = () => {
    return this.state.clientAppJson.dataInfo;
  };
  addFormFields = (dataInfo) => {
    // const dataInfo = this.getDataInfo();
    console.log(dataInfo,'dataInfo')
    dataInfo.map((field, id) => {
      const newField = {
        fieldName: field.fieldName,
        fieldValue: "",
        isFile: field.fieldType === "file"
      };
      this.setState(prevState => ({
        formData: prevState.formData.concat([newField])
      }));
    });
  };
  handleChange = id => event => {
    console.log(id);
    event.preventDefault();
    const newFormData = this.state.formData.map((field, idx) => {
      if (idx !== id) return field;

      let obj = { ...field, fieldValue: event.target.value };

      return obj;
    });
    console.log("newFormData", newFormData);
    this.setState({ formData: newFormData });
  };
  handleFile = id => event => {
    event.preventDefault();
    // const reader = new window.FileReader();
    // reader.readAsArrayBuffer(event.target.files[0]);
    // reader.onloadend = () => {
    //
    //
    //   let readerresult = reader.result;
    //
    // };
    let newFormData = this.state.formData;
    newFormData[id].fieldValue = event.target.files[0];
    this.setState({ formData: newFormData });
  };
  submitForm = async () => {
    let array = this.state.formData.map(field => {
      let obj = {};
      obj.name = field.fieldName;
      obj.value = field.fieldValue;
      obj.isFile = field.isFile;
      return obj;
    });
    const username = localStorage.getItem("username");
    const alicePublicKey = localStorage.getItem("alicePublicKey");
    const privateKey = localStorage.getItem("privateKey");
    const aliceVerifyingKey = localStorage.getItem("aliceVerifyingKey");
    const password = localStorage.getItem('password');
    const aliceKey = localStorage.getItem('aliceKey');
    const label = createRandomHex(10);

    const callingObject = {
      verifyTransaction: (transaction, gasInEth, transactionName, callback) => {
        console.log(transaction, gasInEth, transactionName);
        callback();
      },
      transactionMining: hash => {
        console.log("hash:", hash);
      },
      insufficientFunds: () => {
        console.log("insufficientFunds");
      }
    };
    console.log("array", array);
    console.log("username", username);
    console.log("alicePublicKey", alicePublicKey);
    console.log("privateKey", privateKey);
    console.log("aliceVerifyingKey", aliceVerifyingKey);
    this.setState({ showModal: true });
    await uploadDocument(
      array,
      username,
      password,
      aliceKey,
      label,
      privateKey,
      callingObject
    );

    this.setState({ showModal: false });
  };
  generateForm = () => {
    const dataInfo = this.getDataInfo();
    console.log(dataInfo);

    return dataInfo.map((field, id) => {
      console.log(field);
      if (field.fieldType === "PlainText") {
        return (
          <Form.Group>
            <h2>
              <Form.Label>{field.fieldName}</Form.Label>
            </h2>
            <Form.Control
              key={field.fieldName + id.toString()}
              placeholder={"Type Here"}
              onChange={this.handleChange(id)}
            />
          </Form.Group>
        );
      } else {
        return (
          <Form.Group>
            <h2>
              <Form.Label>{field.fieldName}</Form.Label>
            </h2>

            <div className="custom-file">
              <Form.Control
                key={field.fieldName}
                type="file"
                onChange={this.handleFile(id)}
                className="custom-file-input"
                id="inputGroupFile01"
              />
              <label class="custom-file-label" for="inputGroupFile01">
                Choose file
              </label>
            </div>
          </Form.Group>
        );
      }
    });
  };
  render() {
    return (<>
        <Col md={2}/>
      <Col className={'client-upload-form'} md={8}>
        <Form>
          {this.state.generateForm ? this.generateForm() : null}
          <Form.Group>
            <Button className="button" onClick={this.submitForm}>
              Upload Document
            </Button>
          </Form.Group>
        </Form>
        <TransactionModal showModal={this.state.showModal} />
      </Col></>
    );
  }
}
