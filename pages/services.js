import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

import styles from "../styles/services.module.scss";
import Menu from "../components/Menu";
import { useIntl } from "react-intl";
import formatJsxMessage from "../utils/formatJsxMessage";

export default function services() {
  const intl = useIntl();
  const f = (id, options) => formatJsxMessage(intl, id, options);

  const [isApproachVisible, setIsApproachVisible] = useState(false);
  const [isContentWritingVisible, setIsContentWritingVisible] = useState(false);

  return (
    <div>
      <Menu backgroundColor="#f7f5f0" />

      <div className={styles.main}>
        <div className={styles.mainTitle}>{f("title")}</div>

        <div className={styles.first}>
          <span className={styles.approach}>
            <u>{f("approachTitle")}</u>
          </span>

          {!isApproachVisible ? (
            <span onClick={() => setIsApproachVisible(true)}>
              <BsChevronDown className={styles.icon1} />
            </span>
          ) : (
            <div>
              <div className={styles.mainPara}>
                {" "}
                The language of storytelling is one, no matter the path your
                project paves. Below is the flow that all of our projects
                follow.
              </div>

              <div className={styles.contactUs}>
                <div className={styles.stepTitle}>1. Contact Us</div>
                <div className={styles.stepInfo}>
                  <u>
                    Send an email or book a call through our scheduling system.
                  </u>{" "}
                  Our team is keen to get to know you better and understand the
                  kind of services you're looking for.
                </div>
              </div>

              <div className={styles.form}>
                <div className={styles.stepTitle}>
                  2. Complete the Mauzoun Brief Form.
                </div>
                <div className={styles.stepInfo}>
                  After understanding your needs, we will provide you with the{" "}
                  <u>Mauzoun Brief Form</u>, where you can fill the necessary
                  information required to further understand the scope of your
                  project.
                </div>
              </div>

              <div className={styles.quotation}>
                <div className={styles.stepTitle}>
                  3. Preparing Your Quotation.
                </div>
                <div className={styles.stepInfo}>
                  <u>Our quotations take around 3 business days</u> to prepare
                  after reviewing your form. They include our Terms and
                  Conditions and help clarify and streamline our work together.
                </div>
              </div>

              <div className={styles.timeline}>
                <div className={styles.stepTitle}>4. We Book Your Timeline</div>
                <div className={styles.stepInfo}>
                  Ater receiving your approval of the quotation and down
                  payment, we book your timeline immediately. Our busy schedule
                  and workload demand that we work on booking basis only.
                </div>
              </div>

              <div className={styles.research}>
                <div className={styles.stepTitle}>5. Our Research Begins.</div>
                <div className={styles.stepInfo}>
                  <u>Good work is slow work––that’s our motto.</u> Our average
                  timeline is between 10 to 21 business days. Great writing
                  takes time, so we gather all the data and information needed
                  to complement our writing process and distinguish your tone
                  from competitors.
                </div>
              </div>

              <div className={styles.writing}>
                <div className={styles.stepTitle}>6. The Writing Process.</div>
                <div className={styles.stepInfo}>
                  After finalizing our research internally, we hand it over to{" "}
                  <u>our brilliant team of English and Arabic writers</u> who
                  adapt to your tone with the best quality of writing.
                </div>
              </div>

              <div className={styles.delivery}>
                <div className={styles.stepTitle}>
                  7. Your Deliverables Arrive Right on Time.
                </div>
                <div className={styles.stepInfo}>
                  Working on a booking basis means we’re always on time and with
                  work polished to final draft perfection.
                </div>
              </div>

              <div className={styles.feedback}>
                <div className={styles.stepTitle}>
                  8. You Share Your Feedback or Approval.
                </div>
                <div className={styles.stepInfo}>
                  You provide your feedback via e-mail or phone, and may
                  immediately approve the project! If not, don’t worry—great
                  content takes time.{" "}
                  <u>
                    Every project at Mauzoun has a standard 2 rounds of changes
                    in order to polish your content to perfection.
                  </u>
                </div>
              </div>

              <div className={styles.adapt}>
                <div className={styles.stepTitle}>
                  9. We Adapt Your Timeline
                </div>
                <div className={styles.stepInfo}>
                  We repeat steps 5 through 7 with a new and different approach
                  to research and writing to ensure different results.
                </div>
              </div>

              <div className={styles.final}>
                <div className={styles.stepTitle}>
                  10. Your Story Comes to Life
                </div>
                <div className={styles.stepInfo}>
                  Our holistic process ensures that when your content is
                  finalized it is an embodiment of your vision, having brought
                  together your story to life.
                </div>
              </div>
            </div>
          )}
        </div>

        <div>
          <span className={styles.contentWriting}>
            <u>Content Writing</u>
          </span>
          {!isContentWritingVisible ? (
            <span onClick={() => setIsContentWritingVisible(true)}>
              <BsChevronDown className={styles.icon1} />
            </span>
          ) : (
            <div>
              <div className={styles.firstPara}>
                Holistic, research-based services for strong brands and
                campaigns that need captivating content.
              </div>
              <div className={styles.secondPara}>
                All of our content writing services must be preceded by a Brand
                Strategy. If your brand does not have one, we’d be more than
                glad to prepare one for you.
              </div>
              <div className={styles.thirdPara}>
                We choose to work exclusively with compelling brands on
                long-term basis, or on exciting campaigns.
              </div>

              <div className={styles.serviceListBox}>
                <div className={styles.introPara}>
                  Here’s a list of some of the words we write. If you don’t see
                  the service you want, simply e-mail us, and we’ll be happy to
                  include it in your proposal.
                </div>

                <div className={styles.services}>
                  <div className={styles.naming}>
                    <div classname={styles.line}>____</div>
                    <div className={styles.serviceName}>Brand Naming</div>
                  </div>

                  <div className={styles.manifesto}>
                    <div classname={styles.line}>____</div>
                    <div className={styles.serviceName}>Brand Manifesto</div>
                  </div>

                  <div className={styles.slogans}>
                    <div classname={styles.line}>____</div>
                    <div className={styles.serviceName}>Taglines & Slogans</div>
                  </div>

                  <div className={styles.profile}>
                    <div classname={styles.line}>____</div>
                    <div className={styles.serviceName}>Company Profile</div>
                  </div>

                  <div className={styles.website}>
                    <div classname={styles.line}>____</div>
                    <div className={styles.serviceName}>Website Content</div>
                  </div>

                  <div className={styles.socialMedia}>
                    <div classname={styles.line}>____</div>
                    <div className={styles.serviceName}>
                      Social Media Content
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
