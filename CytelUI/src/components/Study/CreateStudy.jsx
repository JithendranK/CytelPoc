import React, { useRef, useState } from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import { Button, Modal, Form, Row, Col } from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'

function CreateStudy(props) {
    const [studyStartDate, setStudyStartDate] = useState()
    const [studyCompletionDate, setStudyCompletionDate] = useState()
    const studyName = useRef(null)
    const protocolID = useRef(null)
    const studyGroup = useRef(null)
    const studyPhase = useRef(null)
    const primaryIndication = useRef(null)
    const secondaryIndication = useRef(null)

    const handleSubmit = async () => {


        const study_name = studyName.current.value
        const protocol_id = protocolID.current.value
        const study_start_date = moment(studyStartDate).format('YYYY-MM-DD')
        const study_completion_date = moment(studyCompletionDate).format(
            'YYYY-MM-DD'
        )
        const study_group = studyGroup.current.value
        const phase = studyPhase.current.value
        const primary_indication = primaryIndication.current.value
        const secondary_indication = secondaryIndication.current.value

        if (study_name && study_start_date) {

          //  const url = "https://localhost:44391/api/studies"
            const url = "http://cytelwebapitest.ap-south-1.elasticbeanstalk.com/api/studies"
         

            const result = await axios({
                url,
                method: 'POST',
                data: JSON.stringify({
                    "studyName": study_name,
                    "studyStartDate": study_start_date,
                    "estimatedCompletionDate": study_completion_date,
                    "protocolID": protocol_id,
                    "studyGroup": study_group,
                    "phase": phase,
                    "primaryIndication": primary_indication,
                    "secondaryIndication": secondary_indication
                }),
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
            })
            if (result.statusText) {
                return result.data
            } else {
                throw new Error('Something went wrong')
            }

            props.handleSubmit({
                study_name,
                study_start_date,
                study_completion_date,
                protocol_id,
                study_group,
                phase,
                primary_indication,
                secondary_indication,
            })
        }
    }
    return (
        <Modal size="lg" show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Create Study</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Form.Group as={Row} controlId="formStudyName">
                        <Form.Label column sm="2">
                            Study Name*
                        </Form.Label>
                        <Col sm="4">
                            <Form.Control type="text" ref={studyName} />
                        </Col>
                    </Form.Group>

                    <Form.Group
                        as={Row}
                        controlId="formEstimatedCompletionDate"
                    >
                        <Form.Label column sm="2">
                            Study Start Date*
                        </Form.Label>
                        <Col sm="4">
                            <DatePicker
                                selected={studyStartDate}
                                dateFormat="dd/MM/yyyy"
                                onChange={date => {
                                    setStudyStartDate(date)
                                }}
                            />
                        </Col>
                        <Form.Label column sm="2">
                            Est Completion Date
                        </Form.Label>
                        <Col sm="4">
                            <DatePicker
                                selected={studyCompletionDate}
                                dateFormat="dd/MM/yyyy"
                                onChange={date => {
                                    setStudyCompletionDate(date)
                                }}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formProtocolID">
                        <Form.Label column sm="2">
                            Protocol ID
                        </Form.Label>
                        <Col sm="4">
                            <Form.Control type="text" ref={protocolID} />
                        </Col>
                        <Form.Label column sm="2">
                            Study Group
                        </Form.Label>
                        <Col sm="4">
                            <Form.Control type="text" ref={studyGroup} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPhase">
                        <Form.Label column sm="2">
                            Phase
                        </Form.Label>
                        <Col sm="4">
                            <Form.Control type="text" ref={studyPhase} />
                        </Col>
                        <Form.Label column sm="2">
                            Primary Indication
                        </Form.Label>
                        <Col sm="4">
                            <Form.Control type="text" ref={primaryIndication} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formSecondaryIndication">
                        <Form.Label column sm="2">
                            Secondary Indication
                        </Form.Label>
                        <Col sm="4">
                            <Form.Control
                                type="text"
                                ref={secondaryIndication}
                            />
                        </Col>
                    </Form.Group>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="outline-secondary" onClick={props.handleClose}>
                    Cancel
                </Button>
                <Button variant="outline-primary" onClick={handleSubmit}>
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

CreateStudy.defaultProps = {
    show: false,
    handleClose: () => { },
    handleSubmit: () => { },
}

CreateStudy.prototype = {
    show: PropTypes.bool,
    handleClose: PropTypes.func,
    handleSubmit: PropTypes.func,
}

export default CreateStudy
