; window.I9Section2 = (function() {

  const ListBCDocumentTypeId = 28;

  const CitizenshipStatusCodes = [
    { statusCode: 4, label: 'US Citizen' },
    { statusCode: 5, label: 'US National' },
    { statusCode: 6, label: 'Lawful Permanent Resident' },
    { statusCode: 7, label: 'Alien Authorized to Work' }
  ];

  const ListADocumentData = [
    {
      documentTypeId: 13,
      citizenshipStatusCodes: [6],
      label: 'Permanent Resident Card (I-551)',
      inputs: [
        {
          label: 'Green Card Number',
          formField: 'cardNumber'
        },
        {
          label: 'Alien Number / USCIS Number',
          formField: 'alienNumber'
        },
        {
          label: 'Issuing Authority',
          formField: 'permanentResidentCardIssuingAuthority'
        }
      ]
    },

    {
      documentTypeId: 17,
      citizenshipStatusCodes: [7],
      label: 'Employment Authorization Document (I-776)',
      inputs: [
        {
          label: 'Card Number',
          formField: 'cardNumber'
        },
        {
          label: 'Alien Number / USCIS Number',
          formField: 'alienNumber'
        },
        {
          label: 'Issuing Authority',
          formField: 'i776IssuingAuthority'
        },
        {
          label: 'Expiration Date (mm/dd/yyyy)',
          formField: 'documentExpirationDate'
        }
      ]
    },

    {
      documentTypeId: 24,
      citizenshipStatusCodes: [7],
      label: 'Foreign Passport with I-94/I-94A',
      inputs: [
        {
          label: 'Passport Number',
          formField: 'passportNumber'
        },
        {
          label: 'Expiration Date (optional) (mm/dd/yyyy)',
          formField: 'documentExpirationDate'
        },
        {
          label: 'Country of Issuance Code',
          formField: 'countryOfIssuanceCode'
        },
        {
          label: 'I-94 Number',
          formField: 'i94Number'
        },
        {
          label: 'Visa Number (optional)',
          formField: 'visaNumber'
        }
      ]
    },

    {
      documentTypeId: 25,
      citizenshipStatusCodes: [6],
      label: 'Foreign Passport With I-551 Stamp or MRIV',
      inputs: [
        {
          label: 'Passport Number',
          formField: 'passportNumber'
        },
        {
          label: 'Issuing Authority',
          formField: 'i551StampIssuingAuthority'
        },
        {
          label: 'Expiration Date (optional) (mm/dd/yyyy)',
          formField: 'documentExpirationDate'
        },
        {
          label: 'Alien Number',
          formField: 'alienNumber'
        }
      ]
    },

    {
      documentTypeId: 29,
      citizenshipStatusCodes: [4, 5],
      label: 'U.S. Passport or Passport Card',
      inputs: [
        {
          label: 'Passport Number',
          formField: 'passportNumber'
        },
        {
          label: 'Expiration Date (mm/dd/yyyy)',
          formField: 'documentExpirationDate'
        },
        {
          label: 'Issuing Authority',
          formField: 'usPassportIssuingAuthority'
        }
      ]
    }
  ];

  const ListBDocumentData = [
    {
      documentTypeId: 1,
      citizenshipStatusCodes: [4, 5, 6, 7],
      label: `US Driver's License or ID card`,
      inputs: [
        {
          label: 'License / ID Number',
          formField: 'listBCDocumentNumber'
        },
        {
          label: 'Issuing State / US Authority',
          formField: 'issuingAuthorityCode'
        },
        {
          label: 'Expiration Date (if any)',
          formField: 'documentExpirationDate'
        }
      ]
    },

    {
      documentTypeId: 2,
      citizenshipStatusCodes: [4, 5, 6, 7],
      label: 'ID Card Issued by a US Government Agency',
      inputs: [
        {
          label: 'ID Number',
          formField: 'idCardNumber'
        },
        {
          label: 'Expiration Date (optional) (mm/dd/yyyy)',
          formField: 'idCardExpirationDate'
        },
        {
          label: 'Issuing Authority',
          formField: 'listBIdCardIssuingAuthority'
        }
      ]
    },

    {
      documentTypeId: 3,
      citizenshipStatusCodes: [4, 5, 6, 7],
      label: 'School ID Card',
      inputs: [
        {
          label: 'ID Number',
          formField: 'schoolIdCardNumber'
        },
        {
          label: 'Issuing Authority',
          formField: 'schoolIdIssuingAuthority'
        },
        {
          label: 'Expiration Date (optional) (mm/dd/yyyy)',
          formField: 'schoolIdCardExpirationDate'
        }
      ]
    },

    {
      documentTypeId: 4,
      citizenshipStatusCodes: [4, 5, 6, 7],
      label: 'Voter Registration Card',
      inputs: [
        {
          label: 'VUID',
          formField: 'voterRegistrationCardIdNumber'
        },
        {
          label: 'Issuing Authority',
          formField: 'voterCardIssuingAuthority'
        },
        {
          label: 'Expiration Date (optional) (mm/dd/yyyy)',
          formField: 'voterRegistrationCardExpirationDate'
        }
      ]
    },

    {
      documentTypeId: 5,
      citizenshipStatusCodes: [4, 5, 6, 7],
      label: 'US Military Card or Draft Record',
      inputs: [
        {
          label: 'DoD Identification Number',
          formField: 'militaryCardIdNumber'
        },
        {
          label: 'Issuing Authority',
          formField: 'militaryCardIssuingAuthority'
        },
        {
          label: 'Expiration Date (optional) (mm/dd/yyyy)',
          formField: 'voterRegistrationCardExpirationDate'
        }
      ]
    },

    {
      documentTypeId: 6,
      citizenshipStatusCodes: [4, 5, 6, 7],
      label: `Military Dependent's ID Card`,
      inputs: [
        {
          label: 'Expiration Date (optional) (mm/dd/yyyy)',
          formField: 'voterRegistrationCardExpirationDate'
        },
        {
          label: 'Issuing Authority',
          formField: 'militaryDependentIssuingAuthority'
        }
      ]
    },

    {
      documentTypeId: 7,
      citizenshipStatusCodes: [4, 5, 6, 7],
      label: 'US Coast Guard Merchant Mariner Card',
      inputs: [
        {
          label: 'Document Number',
          formField: 'merchantMarinerCardNumber'
        },
        {
          label: 'Expiration Date (optional) (mm/dd/yyyy)',
          formField: 'voterRegistrationCardExpirationDate'
        }
      ]
    },

    {
      documentTypeId: 8,
      citizenshipStatusCodes: [4, 5, 6, 7],
      label: 'Native American Tribal Document',
      inputs: [
        {
          label: 'Issuing Authority',
          formField: 'tribalDocumentIssuingAuthority'
        },
        {
          label: 'Expiration Date (optional) (mm/dd/yyyy)',
          formField: 'tribalDocumentExpirationDate'
        }
      ]
    },

    {
      documentTypeId: 9,
      citizenshipStatusCodes: [4, 5, 6, 7],
      label: `Canadian Driver's License`,
      inputs: [
        {
          label: 'License Number',
          formField: 'canadianDriversLicenseNumber'
        },
        {
          label: 'Issuing Authority',
          formField: 'canadianDriversLicenseIssuingAuthority'
        },
        {
          label: 'Expiration Date (optional) (mm/dd/yyyy)',
          formField: 'canadianDriversLicenseExpirationDate'
        }
      ]
    },

    {
      documentTypeId: 10,
      citizenshipStatusCodes: [4, 5, 6, 7],
      label: 'School Record or Report Card (under age 18)',
      inputs: [
        {
          label: 'Issuing Authority (School / Institution Name)',
          formField: 'schoolIssuingAuthority'
        }
      ]
    },

    {
      documentTypeId: 11,
      citizenshipStatusCodes: [4, 5, 6, 7],
      label: 'Clinic, Doctor or Hospital Record (under age 18)',
      inputs: [
        {
          label: 'Issuing Authority (Clinic, Doctor, Hospital)',
          formField: 'medicalRecordIssuingAuthority'
        }
      ]
    },

    {
      documentTypeId: 12,
      citizenshipStatusCodes: [4, 5, 6, 7],
      label: 'Day-Care or Nursery School Record (under age 18)',
      inputs: [
        {
          label: 'Issuing Authority',
          formField: 'nurseryIssuingAuthority'
        }
      ]
    },

    {
      documentTypeId: 21,
      citizenshipStatusCodes: [4, 5, 6, 7],
      label: 'Minor Under Age 18 Without a List B Document',
      input: []
    },

    {
      documentTypeId: 22,
      citizenshipStatusCodes: [4, 5, 6, 7],
      label: 'Special Placement',
      inputs: []
    }
  ];

  const ListCDocumentData = [
    {
      documentTypeId: 13,
      citizenshipStatusCodes: [4, 5, 6 ,7],
      label: 'US Social Security Card',
      inputs: [
        {
          label: 'SSN',
          formField: 'ssn'
        },
        {
          label: 'Issuing Authority',
          formField: 'ssnIssuingAuthority'
        }
      ]
    },

    {
      documentTypeId: 14,
      citizenshipStatusCodes: [4, 5],
      label: 'Certification of Birth Abroad (Form FS-545)',
      inputs: [
        {
          label: 'Certificate Number',
          formField: 'fs545CertificateNumber'
        },
        {
          label: 'Issuing Authority',
          formField: 'fs545IssuingAuthority'
        }
      ]
    },

    {
      documentTypeId: 15,
      citizenshipStatusCodes: [4, 5],
      label: 'Certification of Report of Birth (DS-1350)',
      inputs: [
        {
          label: 'Certificate Number',
          formField: 'ds1350CertificateNumber'
        },
        {
          label: 'Issuing Authority',
          formField: 'ds1350IssuingAuthority'
        }
      ]
    },

    {
      documentTypeId: 16,
      citizenshipStatusCodes: [4, 5],
      label: 'US Birth Certificate (original or certified copy)',
      inputs: [
        {
          label: 'Certificate Number',
          formField: 'usBirthCertificateNumber'
        },
        {
          label: 'Issuing Authority (State that issued certificate)',
          formField: 'birthCertificateIssuingAuthority'
        }
      ]
    },

    {
      documentTypeId: 17,
      citizenshipStatusCodes: [4, 5, 6, 7],
      label: 'Native American Tribal Record',
      inputs: [
        {
          label: 'Document Number',
          formField: 'listCTribalDocumentNumber'
        },
        {
          label: 'Issuing Authority (Issuing Tribe)',
          formField: 'listCTribalDocumentIssuingAuthority'
        }
      ]
    },

    {
      documentTypeId: 18,
      citizenshipStatusCodes: [4, 5],
      label: 'US Citizen ID Card (Form I-197)',
      inputs: [
        {
          label: 'Document Number',
          formField: 'i197CitizenDocumentNumber'
        },
        {
          label: 'Issuing Authority',
          formField: 'i197CitizenIssuingAuthority'
        }
      ]
    },

    {
      documentTypeId: 19,
      citizenshipStatusCodes: [4, 5],
      label: 'ID Card for Use of Resident Citizen in the US (I-179)',
      inputs: [
        {
          label: 'Document Number',
          formField: 'i179ResidentDocumentNumber'
        },
        {
          label: 'Issuing Authority',
          formField: 'i179ResidentIssuingAuthority'
        }
      ]
    },

    {
      documentTypeId: 20,
      citizenshipStatusCodes: [4, 5, 6, 7],
      label: 'Employment authorization document issued by the DHS',
      inputs: [
        {
          label: 'Document Number',
          formField: 'dhsEmploymentAuthDocumentNumber'
        }
      ]
    }
  ];

  const makeLabelInputPair  = ({ id, labelText, initialValue, opts = {} }) => {
    return [
      m('label', { for: id, class: 'f6 b db mb2' }, labelText),
      m('input', {
        name: id,
        id,
        value: initialValue,
        type: 'text',
        class: 'input-reset ba b--black-20 pa2 mb2 db w-100',
        ...opts
      })
    ];
  };

  const Header = {
    view() {
      return (
        m(
          'div',
          {
            class: 'ba bw1 bg-black-20 mv2'
          },
          [
            m('strong', { class: 'f4' }, 'Section 2. Employer or Authorized Representative Review and Verification'),
            m('br'),
            m('span',
              m('em', `(Employers or their authorized representative must complete and sign Section 2 within 3 business days of the employee's first day of employment. You must physically examine one document from List A OR a combination of one document from List B and one document from List C as listed on the "Lists of Acceptable Documents.")`))
          ]));
    }
  };

  const sectionClass = 'ba bw1 pa2 mt2 mb2';
  const titleClass   = 'f5 fl w-100 pb3';

  const Section1Info = {
    view(vnode) {
      const i9Form                = vnode.attrs;
      const citizenshipStatusCode = Number(i9Form.citizenshipStatusCode);

      return m('div', { class: sectionClass }, [
        m('strong', { class: titleClass }, 'Employee Info from Section 1'),

        ...makeLabelInputPair({
          id: 'lastName',
          labelText: 'Last Name',
          initialValue: i9Form.lastName,
          opts: {
            disabled: true,
            class: 'input-reset ba b--black-20 pa2 mb2 db w-60'
          }
        }),

        ...makeLabelInputPair({
          id: 'firstName',
          labelText: 'First Name',
          initialValue: i9Form.firstName,
          opts: {
            disabled: true,
            class: 'input-reset ba b--black-20 pa2 mb2 db w-60'
           }
        }),

        ...makeLabelInputPair({
          id: 'middleInitial',
          labelText: 'M.I.',
          initialValue: i9Form.middleInitial,
          opts: {
            disabled: true,
            maxlength: 1,
            class: 'input-reset ba b--black-20 pa2 mb2 db w-10'
          }
        }),

        // citizenship/immigration status
        m('label', { for: 'citizenship-status', class: 'mr3' }, 'Citizenship / Immigration Status'),
        m('select', { id: 'citizenship-status', name: 'citizenshipStatusCode' }, [
          m('option', { value: -1, disabled: true, selected: citizenshipStatusCode < 0  }, 'Select the corresponding status'),
          ...CitizenshipStatusCodes.map(({ statusCode, label }) => {
            const selected = (citizenshipStatusCode === statusCode);
            const value    = statusCode;
            return m('option', { selected, value }, label);
          })
        ])
      ]);
    }
  };

  const generateDocumentSelectOptions = (citizenshipStatusCode = -1, currDocTypeId = -1, docData = []) => {
    return (
      docData
        .filter(({ citizenshipStatusCodes }) => citizenshipStatusCodes.includes(citizenshipStatusCode))
        .map(({ documentTypeId, label }) => {
          return m(
            'option',
            {
              value: documentTypeId,
              selected: documentTypeId === currDocTypeId
            },
            label);
        }));
  };

  const ListBAndCDocumentSelect = {
    view(vnode) {
      const i9Form = vnode.attrs;

      const documentTypeId = Number(i9Form.documentTypeId);
      if (documentTypeId !== ListBCDocumentTypeId) {
        return null;
      }

      const citizenshipStatusCode = Number(i9Form.citizenshipStatusCode);
      if (citizenshipStatusCode < 0) {
        return null;
      }

      const listBDocumentTypeId = Number(i9Form.listBDocumentTypeId);
      const listBOptions = generateDocumentSelectOptions(citizenshipStatusCode, listBDocumentTypeId, ListBDocumentData);

      const listCDocumentTypeId = Number(i9Form.listCDocumentTypeId);
      const listCOptions = generateDocumentSelectOptions(citizenshipStatusCode, listCDocumentTypeId, ListCDocumentData);

      return m('div', { class: 'measure pb3' },
        [
          m('div', { class: 'pb3' }, [
            m('label', { for: 'list-b-document-select' }, 'List B Documents'),
            m('select', { name: 'listBDocumentTypeId', id: 'list-b-document-select' },
            [
              m('option', { selected: listBDocumentTypeId < 0, disabled: true, value: -1 }, 'Please select a document'),
              ...listBOptions
            ]),
          ]),

          m('div', [
            m('label', { for: 'list-c-document-select' }, 'List C Documents'),
            m('select', { name: 'listCDocumentTypeId', id: 'list-c-document-select' },
            [
              m('option', { selected: -1 === listCDocumentTypeId, disabled: true, valeu: -1}, 'Please select a document'),
              ...listCOptions
            ])
          ]),
        ]);
    }
  };

  const DocumentSelect = {
    view(vnode) {
      const i9Form                = vnode.attrs;
      const citizenshipStatusCode = Number(i9Form.citizenshipStatusCode);
      const documentTypeId        = Number(i9Form.documentTypeId);

      if (citizenshipStatusCode < 0 || isNaN(citizenshipStatusCode)) {
        return (
          m('div', { class: sectionClass }, [
            m('strong', { class: titleClass }, 'Identity and Employment Authorization'),
            m('p', 'Please select a citizenship status code first'),
          ]));
      }

      const listADocs = generateDocumentSelectOptions(citizenshipStatusCode, documentTypeId, ListADocumentData);

      return (
        m('div', { class: sectionClass }, [
          m('strong', { class: 'f5'}, 'Identity and Employment Authorization'),
          m('p', 'The employee presented me with:'),

          m('select', { name: 'documentTypeId', class: 'mb3' }, [
            m('option', { selected: -1 === documentTypeId, disabled: true, value: -1 }, 'Please select a document'),
            ...listADocs,
            m(
              'option',
              {
                selected: documentTypeId === ListBCDocumentTypeId,
                value: ListBCDocumentTypeId
              },
              'List B and C Documents')
          ]),

          documentTypeId === ListBCDocumentTypeId
          ? m(ListBAndCDocumentSelect, i9Form)
          : null,

          documentTypeId === ListBCDocumentTypeId
          ? m(ListBAndCDocumentInfo, i9Form)
          : m(ListADocumentInfo, i9Form),

          m(AdditionalInformation, i9Form),
        ]));
    }
  };

  const docDataToVNodes = (documentTypeId = -1, vnode = {}, docDataSources = []) => {

    const documentData = docDataSources.find(
      (docData) => {
        return docData.documentTypeId == documentTypeId;
      });

    const inputs = documentData.inputs || [];
    const vnodes = inputs.reduce(
      (vnodes, { label, formField }) => {
        const labelInputVNodePair = makeLabelInputPair({
          id: formField,
          labelText: label,
          initialValue: vnode.attrs[formField] || ''
        });
        return vnodes.concat(labelInputVNodePair);
      },
      []);

    return vnodes;
  };

  const ListADocumentInfo = {
    view(vnode) {
      const i9Form = vnode.attrs;

      const citizenshipStatusCode = Number(i9Form.citizenshipStatusCode);
      const documentTypeId        = Number(i9Form.documentTypeId);

      if (
        citizenshipStatusCode < 0 ||
        documentTypeId === ListBCDocumentTypeId ||
        documentTypeId < 0
      ) {
        return null;
      }

      return m(
        'div',
        { class: 'measure pb3' },
        docDataToVNodes(documentTypeId, vnode, ListADocumentData));
    }
  };

  const ListBAndCDocumentInfo = {
      view(vnode) {
        const i9Form = vnode.attrs;

        const citizenshipStatusCode = Number(i9Form.citizenshipStatusCode);
        const documentTypeId        = Number(i9Form.documentTypeId);
        const listBDocumentTypeId   = Number(i9Form.listBDocumentTypeId);
        const listCDocumentTypeId   = Number(i9Form.listCDocumentTypeId);

        if ([
          citizenshipStatusCode,
          documentTypeId,
          listBDocumentTypeId,
          listCDocumentTypeId].includes(-1)
        ) {
          return null;
        }

        const listBDocInputs = docDataToVNodes(listBDocumentTypeId, vnode, ListBDocumentData)

        return m(
          'div',
          { class: 'measure' },
          [
            m('div', { class: '' },
            [
              listBDocInputs.length > 0
              ? m('strong', { class: 'f5' }, 'List B Document Information', listBDocInputs)
              : null
            ]),
            m('div', { class: 'pt3 pb3' },
            [
              m('strong', { class: 'f5' }, 'List C Document Information', docDataToVNodes(listCDocumentTypeId, vnode, ListCDocumentData))
            ])
          ]);
      }
  };

  const AdditionalInformation = {
    view(vnode) {
      const documentTypeId      = Number(vnode.attrs.documentTypeId);
      const listBDocumentTypeId = Number(vnode.attrs.listBDocumentTypeId);
      const listCDocumentTypeId = Number(vnode.attrs.listCDocumentTypeId);

      if (
        (documentTypeId === ListBCDocumentTypeId &&
        (listBDocumentTypeId < 0 || listCDocumentTypeId < 0)) ||
        (documentTypeId < 0)
      ) {
        return null;
      }

      return (
        m('div', [
          m('h4', 'Additional Information (if any)'),
          m(
            'textarea',
            { name: 'additionalInformation', rows: 4, cols: 50 },
            vnode.attrs.additionalInformation || '')
        ]));
    }
  };

  const Certification = {
    view(vnode) {
      return (
        m('div', [
          m('strong', { class: 'f6' }, 'Certification: I attest, under penalty of perjury, that (1) I have examined the document(s) presented by the above-named employee, (2) the above-listed document(s) appear to be genuine and to relate to the employee named, and (3) to the best of my knowledge the employee is authorized to work in the United States.'),
          m('p', [
            m('strong',  { class: 'f6 pr2' }, `The employee's first day of employment: `),
            m('span',
              m(
                'input',
                {
                  type: 'date',
                  value: vnode.attrs.hireDate || '',
                  name: 'hireDate'
                }))
          ])
        ]));
    }
  };

  const EmployerInfo = {
    view(vnode) {
      const i9Form = vnode.attrs;
      return m('div', { class: sectionClass }, [
        m('strong', { class: titleClass }, 'Employer Info'),

        m('div', { class: 'measure' }, [
          m('label', { for: 'todays-date', class: 'pr2' }, `Today's Date:`),
          m('input', {
            name: 'todaysDate',
            id: 'todays-date',
            value: i9Form.todaysDate,
            type: 'date'
          }),
          ...makeLabelInputPair({
            id: 'employerTitle',
            labelText: 'Title of Employer or Authorized Representative',
            initialValue: i9Form.employerTitle
          }),
          ...makeLabelInputPair({
            id: 'employerLastName',
            labelText: 'Employer Last Name',
            initialValue: i9Form.employerLastName
          }),
          ...makeLabelInputPair({
            id: 'employerFirstName',
            labelText: 'Employer First Name',
            initialValue: i9Form.employerFirstName
          }),
          ...makeLabelInputPair({
            id: 'employerName',
            labelText: `Employer's Business or Organization Name`,
            initialValue: i9Form.employerName
          }),
          ...makeLabelInputPair({
            id: 'employerAddress',
            labelText: `Employer's Business or Organization Address (Street Number and Name)`,
            initialValue: i9Form.employerAddress
          }),
          ...makeLabelInputPair({
            id: 'employerCity',
            labelText: 'City or Town',
            initialValue: i9Form.employerCity
          }),
          ...makeLabelInputPair({
            id: 'employerState',
            labelText: 'State',
            initialValue: i9Form.employerState
          }),
          ...makeLabelInputPair({
            id: 'employerZipCode',
            labelText: 'ZIP Code',
            initialValue: i9Form.employerZipCode
          })
        ])
      ])
    }
  };

  // const SubmitButton = (i9Form) => ({
  //   view() {
  //     const submitSection2 = (event) => {
  //       event.preventDefault();
  //       // m.request({
  //       //   method: 'POST',
  //       //   url: `/i9`,
  //       //   data: i9Form
  //       // }).then((resBody) => {
  //       //   console.log(resBody);
  //       // })
  //       console.log(`Someday we're going to submit the following data:`);
  //       console.log(i9Form);
  //     };

  //     return (
  //       m('div',
  //         m('input', {
  //           type: 'submit',
  //           class: 'b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib',
  //           value: 'Submit Section 2',
  //           onclick: submitSection2
  //         })));
  //   }
  // });

  const onFormChange = (i9FormData) => (event) => {
    const key  = event.target.name;

    console.log(key);

    console.log(Object.keys(i9FormData));

    i9FormData[key] = event.target.value;

    // TODO: refactor this behavior using proxies or something
    if (key === 'citizenshipStatusCode') {
      i9FormData.documentTypeId        = -1;
      i9FormData.listBDocumentTypeId   = -1;
      i9FormData.listCDocumentTypeId   = -1;
      i9FormData.additionalInformation = '';
    }

    if (key === 'documentTypeId') {
      i9FormData.listBDocumentTypeId = -1;
      i9FormData.listCDocumentTypeId = -1;
    }
  };

  const I9FormDefaults = {
    documentTypeId:         -1,
    listBDocumentTypeId:    -1,
    listCDocumentTypeId:    -1,
    lastName:               '',
    firstName:              '',
    middleInitial:          '',
    citizenshipStatusCode:  -1,
    passportNumber:         '',
    documentExpirationDate: '',
    hireDate:               '',
    todaysDate:             '',
    submittingOfficialName: '',
    employerTitle:          '',
    employerLastName:       '',
    employerFirstName:      '',
    employerName:           '',
    employerAddress:        '',
    employerCity:           '',
    employerState:          '',
    employerZipCode:        ''
  };

  const I9Form = {
    view(vnode) {
      const i9Form         = vnode.attrs;
      const documentTypeId = Number(i9Form.documentTypeId);
      return (
        m(
          'form',
          {
            autocomplete: 'off',
            onchange: onFormChange(i9Form)
          },
          [
            m(Header),
            m(Section1Info,   i9Form),
            m(DocumentSelect, i9Form),
            m(Certification,  i9Form),
            m(EmployerInfo,   i9Form)
          ]));
    }
  };

  class I9Section2 {
    constructor(initialData = {}) {
      this.formData = {
        ...I9FormDefaults,
        ...initialData
      };
    }

    mount(element) {
      this.element = element;
      const formData = this.formData;
      m.mount(element, {
        view() {
          return m(I9Form, formData);
        }
      });
    }

    unmount() {
      m.mount(this.element, null);
    }
  }

  return I9Section2;
})();