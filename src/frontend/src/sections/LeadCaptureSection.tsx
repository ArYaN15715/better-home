import { CheckCircle, Send } from "lucide-react";
import { useState } from "react";
import { useInView } from "../hooks/useInView";

interface FormState {
  name: string;
  phone: string;
  requirement: string;
}

export function LeadCaptureSection() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    requirement: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const { ref, inView } = useInView(0.1);

  const validate = () => {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.phone.trim() || !/^[6-9]\d{9}$/.test(form.phone.trim()))
      e.phone = "Enter a valid 10-digit phone number";
    if (!form.requirement.trim())
      e.requirement = "Please describe your requirement";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1400);
  };

  return (
    <section
      id="contact"
      data-ocid="lead_capture.section"
      className="py-12 sm:py-14 bg-[#FAFAFA] border-t border-gray-100"
      aria-label="Lead Capture Form"
    >
      <div className="container mx-auto px-4 max-w-lg">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`text-center mb-6 sm:mb-8 reveal-item ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl mb-2">
            Tell Us What You Need
          </h2>
          <p className="font-body text-muted-foreground text-sm">
            Share your requirements and we'll find the best options for you
          </p>
        </div>

        <div
          className={`bg-white rounded-3xl p-5 sm:p-6 shadow-card border border-gray-100 reveal-item ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "150ms" }}
        >
          {submitted ? (
            <div
              data-ocid="lead_capture.success_state"
              className="text-center py-8 flex flex-col items-center gap-4"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center animate-zoom-in"
                style={{
                  background: "linear-gradient(135deg, #FF5A2C, #FF7A4C)",
                }}
              >
                <CheckCircle size={32} className="text-white" />
              </div>
              <div>
                <h3 className="font-display font-bold text-foreground text-xl mb-1">
                  We'll Call You Soon!
                </h3>
                <p className="font-body text-muted-foreground text-sm">
                  Our expert will contact you within 15 minutes
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setForm({ name: "", phone: "", requirement: "" });
                }}
                data-ocid="lead_capture.reset_button"
                className="text-orange font-body text-sm underline hover:no-underline"
                style={{ minHeight: "auto", minWidth: "auto" }}
              >
                Submit another inquiry
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              data-ocid="lead_capture.form"
            >
              <div className="flex flex-col gap-4">
                {/* Name */}
                <div>
                  <label
                    htmlFor="lead-name"
                    className="block font-body text-sm font-medium text-foreground mb-1.5"
                  >
                    Your Name{" "}
                    <span className="text-orange" aria-hidden="true">
                      *
                    </span>
                  </label>
                  <input
                    id="lead-name"
                    type="text"
                    data-ocid="lead_capture.name_input"
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    onBlur={() => {
                      if (!form.name.trim())
                        setErrors((er) => ({
                          ...er,
                          name: "Name is required",
                        }));
                      else setErrors((er) => ({ ...er, name: undefined }));
                    }}
                    placeholder="e.g. Rajesh Patel"
                    className={`w-full px-4 py-3 rounded-xl border font-body text-sm text-foreground placeholder:text-muted-foreground bg-white transition-smooth outline-none focus:border-[#FF5A2C] focus:ring-2 focus:ring-[#FF5A2C]/20 ${
                      errors.name ? "border-[#FF5A2C]/70" : "border-border"
                    }`}
                    aria-required="true"
                    aria-invalid={!!errors.name}
                    aria-describedby={
                      errors.name ? "lead-name-error" : undefined
                    }
                    autoComplete="name"
                  />
                  {errors.name && (
                    <p
                      id="lead-name-error"
                      data-ocid="lead_capture.name_field_error"
                      className="mt-1 text-xs text-orange font-body"
                      role="alert"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="lead-phone"
                    className="block font-body text-sm font-medium text-foreground mb-1.5"
                  >
                    Phone Number{" "}
                    <span className="text-orange" aria-hidden="true">
                      *
                    </span>
                  </label>
                  <input
                    id="lead-phone"
                    type="tel"
                    data-ocid="lead_capture.phone_input"
                    value={form.phone}
                    onChange={(e) =>
                      setForm((f) => ({
                        ...f,
                        phone: e.target.value.replace(/\D/g, "").slice(0, 10),
                      }))
                    }
                    onBlur={() => {
                      if (
                        !form.phone.trim() ||
                        !/^[6-9]\d{9}$/.test(form.phone.trim())
                      )
                        setErrors((er) => ({
                          ...er,
                          phone: "Enter a valid 10-digit phone number",
                        }));
                      else setErrors((er) => ({ ...er, phone: undefined }));
                    }}
                    placeholder="98765 43210"
                    inputMode="numeric"
                    className={`w-full px-4 py-3 rounded-xl border font-body text-sm text-foreground placeholder:text-muted-foreground bg-white transition-smooth outline-none focus:border-[#FF5A2C] focus:ring-2 focus:ring-[#FF5A2C]/20 ${
                      errors.phone ? "border-[#FF5A2C]/70" : "border-border"
                    }`}
                    aria-required="true"
                    aria-invalid={!!errors.phone}
                    aria-describedby={
                      errors.phone ? "lead-phone-error" : undefined
                    }
                    autoComplete="tel"
                  />
                  {errors.phone && (
                    <p
                      id="lead-phone-error"
                      data-ocid="lead_capture.phone_field_error"
                      className="mt-1 text-xs text-orange font-body"
                      role="alert"
                    >
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Requirement */}
                <div>
                  <label
                    htmlFor="lead-requirement"
                    className="block font-body text-sm font-medium text-foreground mb-1.5"
                  >
                    Your Requirement{" "}
                    <span className="text-orange" aria-hidden="true">
                      *
                    </span>
                  </label>
                  <textarea
                    id="lead-requirement"
                    data-ocid="lead_capture.requirement_textarea"
                    value={form.requirement}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, requirement: e.target.value }))
                    }
                    onBlur={() => {
                      if (!form.requirement.trim())
                        setErrors((er) => ({
                          ...er,
                          requirement: "Please describe your requirement",
                        }));
                      else
                        setErrors((er) => ({ ...er, requirement: undefined }));
                    }}
                    placeholder="e.g. 3BHK apartment in Bopal under ₹80 Lakhs"
                    rows={3}
                    className={`w-full px-4 py-3 rounded-xl border font-body text-sm text-foreground placeholder:text-muted-foreground bg-white transition-smooth outline-none focus:border-[#FF5A2C] focus:ring-2 focus:ring-[#FF5A2C]/20 resize-none ${
                      errors.requirement
                        ? "border-[#FF5A2C]/70"
                        : "border-border"
                    }`}
                    aria-required="true"
                    aria-invalid={!!errors.requirement}
                    aria-describedby={
                      errors.requirement ? "lead-req-error" : undefined
                    }
                    style={{ minHeight: "auto" }}
                  />
                  {errors.requirement && (
                    <p
                      id="lead-req-error"
                      data-ocid="lead_capture.requirement_field_error"
                      className="mt-1 text-xs text-orange font-body"
                      role="alert"
                    >
                      {errors.requirement}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  data-ocid="lead_capture.submit_button"
                  disabled={loading}
                  className="btn-cta ripple flex items-center justify-center gap-2 w-full py-4 text-base disabled:opacity-70 disabled:cursor-not-allowed mt-1"
                  aria-label="Get Instant Callback"
                  style={{ minHeight: "52px" }}
                >
                  {loading ? (
                    <span
                      data-ocid="lead_capture.loading_state"
                      className="flex items-center gap-2"
                    >
                      <span className="inline-block w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <>
                      <Send size={16} />
                      Get Instant Callback
                    </>
                  )}
                </button>

                <p className="text-center font-body text-xs text-muted-foreground">
                  ⚡ Response within 15 minutes
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
