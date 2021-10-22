// These are the patient IDs for the 8 patients with the biggest payloads
const ids = [546669, 404184, 420795, 278905, 369703, 267423, 375546, 375546];

// Pick a random patient ID
const getId = () => ids[Math.floor(Math.random() * ids.length)];

// Return an object with the HTTP request bodies you can choose from
const bodies = () => ({
  // This is a stringified JSON of the query and variables to send in the request
  // You can get this from looking at the request you send in the AppSync console, or 
  // if you use a GUI like Postman
  getPatientRecord: '{"query":"query GetPatientRecord($patientID:Int!) { getPatientRecord(patientID: $patientID) { contacts { address1 address2 city contactId fname homePhone isGuardian isHippa lname name patientID relation state vmid zipcode } insurances { copay endDate copayType groupNumber insurancCompanyName insuranceDetailID insuranceCarrierId insuranceType insuredID insuredRelationshipToPatient patientID startDate subscriberNo } messageId patient { address1 address2 cellPhone city communicationPreference consentToCall consentToText county dateOfBirth deceased deceasedDate doctorID email empAddr1 empAddr2 empCity empName empPhone empState empZip firstName gender guarantorID guarantorRelation homePhone guarantorRelationId isActive language lastName maritalStatus note officePhone patientID preferredFacilityId preferredLanguageForCommunication preferredName preferredPhoneNumber preferredProviderId preferredTimeToCall prefix previousName primaryEthnicity primaryEthnicityID primaryInsuranceId primaryInsuranceName primaryInsuranceType primaryRace ssn state suffix zip } patientID pharmacies { isPrimary patientID patientPharmacyID pharmacyID } responsibleParty { cellPhone dateOfBirth email firstName gender guarantorId homePhone lastName mailingAddress1 mailingAddress2 mailingCity mailingZip mailingState middleInitial ssn } ulid }}","variables":{"patientID":' + getId() + '}}'
})

module.exports = { bodies, ids };