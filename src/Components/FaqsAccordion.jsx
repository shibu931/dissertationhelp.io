import React from 'react'

export default function FaqsAccordion({data}) {
    return (
        <div class="accordion" id="accordionExample">
            {
                data?.map((element, index) => (
                    <div class="accordion-item" key={index}>
                        <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#${element.key}`} aria-expanded="true" aria-controls={element.key}>
                                {element.title}
                            </button>
                        </h2>
                        <div id={element.key} class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                {element.content}
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
