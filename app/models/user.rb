class User < ApplicationRecord
    #FIGVAPER
    validates :firstname, :lastname, :password_digest, presence: true
    validates :email, :session_token, presence: true, uniqueness: true
    validates :password, length: {minimum: 6}, allow_nil: true
    
    attr_reader :password
    after_initialize :ensure_session_token

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        user && user.is_pasword?(password) ? user : nil
    end

    def is_pasword?(password)
        BCrypt::Password.new(self.password_digest).is_pasword?(password)
    end

    def generate_session_token
        SecureRandom::urlsafe_base64
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def ensure_session_token
        self.session_token ||= generate_session_token
    end

    def reset_session_token!
        self.session_token = generate_session_token
        self.save!
        self.session_token
    end
end